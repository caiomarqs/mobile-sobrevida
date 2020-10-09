import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView, View, Platform, Alert, KeyboardAvoidingView } from 'react-native'
import { Picker, PickerIOS } from '@react-native-community/picker'

import { SimpleInput, StatusBarColor, PassInput, SubTitleBoldText, PrimaryButton } from '../../components'
import { getEstados, getCidades } from '../../services'
import { sortObjectArrayByKey, cadastroValidation, onlyStringMask, cpfMask } from '../../utils'
import { styles } from './styles'
import { Base } from '../../styles'

const Cadastro = () => {

    //Estados dos inputs
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cpf, setCpf] = useState('')
    const [selectUf, setSelectUf] = useState('')
    const [selectCidade, setSelectCidade] = useState('')

    //Estados de carregamento
    const [loadingUfs, setLoadingUfs] = useState(false)
    const [loadingCidades, setLoadingCidades] = useState(false)

    //Estados vindos da api do IBGE
    const [cidadesIBGE, setCidadesIBGE] = useState([])
    const [ufsIBGE, setUfsIBGE] = useState([])

    //Inputs Ref para poder dar o returnKeyType
    const emailInputRef = useRef();
    const passInputRef = useRef();
    const cpfInputRef = useRef();


    useEffect(() => {
        if (!loadingUfs) {
            getEstados().then(({ data }) => {
                setUfsIBGE(data)
                setLoadingUfs(true)
            })
        }
    }, [])

    const handleCarregarCidades = (uf) => {
        setSelectUf(uf)

        if (uf === 0) {
            setLoadingCidades(false)
            return
        }

        getCidades(uf).then(({ data }) => {
            setCidadesIBGE(data)
            setLoadingCidades(true)
        })
    }

    const handleCadastrar = () => {
        const [test, testErrors] = cadastroValidation(nome, email, senha, cpf, selectUf, selectCidade)

        if (test) {
            alert('Cadastrado com sucesso!')
            return
        }

        Alert.alert('Cadastro Inválido', testErrors.toString().replace(/,/g, '\n'))
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarColor
                backgroundColor={'transparent'}
                barStyle='dark-content'
                hasHeader={true}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >

                <SubTitleBoldText style={styles.title}>Faça seu cadastro para se declarar doador</SubTitleBoldText>
                
                <View style={styles.inputsContainer}>

                    <SimpleInput
                        onChangeText={(text) => setNome(text)}
                        onSubmitEditing={() => emailInputRef.current.focus()}
                        placeholder='Nome completo'
                        returnKeyType="next"
                        style={styles.cadastroInput}
                        value={nome}
                    />

                    <SimpleInput
                        forwardRef={emailInputRef}
                        keyboardType='email-address'
                        onChangeText={(text) => setEmail(text)}
                        onSubmitEditing={() => passInputRef.current.focus()}
                        placeholder='Email'
                        returnKeyType="next"
                        style={styles.cadastroInput}
                        value={email}
                    />

                    <PassInput
                        forwardRef={passInputRef}
                        onChangeText={(text) => setSenha(text)}
                        onSubmitEditing={() => cpfInputRef.current.focus()}
                        placeholder='Senha'
                        returnKeyType="next"
                        style={styles.cadastroInput}
                        value={senha}
                    />

                    <SimpleInput
                        forwardRef={cpfInputRef}
                        keyboardType='numeric'
                        maxLength={14}
                        onChangeText={(text) => setCpf(cpfMask(text))}
                        placeholder='Cpf'
                        style={styles.cadastroInput}
                        value={cpf}
                    />

                    {
                        loadingUfs
                        &&
                        <Picker
                            onValueChange={(value) => handleCarregarCidades(value)}
                            selectedValue={selectUf ?? 0}
                            style={{ ...Base.pickerContainer }}
                        >
                            <Picker.Item
                                label='Uf'
                                value={0}
                            />
                            {
                                sortObjectArrayByKey(ufsIBGE, 'nome').map((uf, i) => {
                                    return <Picker.Item key={i + uf.id} label={uf.nome} value={uf.sigla} />
                                })
                            }
                        </Picker>
                    }
                    {
                        loadingCidades
                        &&
                        <Picker
                            onValueChange={(value) => setSelectCidade(value)}
                            selectedValue={selectCidade ?? 0}
                            style={{ ...Base.pickerContainer }}
                        >
                            <Picker.Item label='Cidade' value={0} />
                            {
                                cidadesIBGE.map((cidade, i) => {
                                    return <Picker.Item key={i + cidade.id} label={cidade.nome} value={cidade.nome} />
                                })
                            }
                        </Picker>
                    }
                    <View style={styles.inputsContainer} />
                    <PrimaryButton
                        onPress={() => handleCadastrar()}
                        style={styles.button}
                        title="Cadastrar"
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export { Cadastro }