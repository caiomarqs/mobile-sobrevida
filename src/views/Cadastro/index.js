import React, { useEffect, useState, useRef } from 'react'
import { SafeAreaView, View, Platform, Alert, KeyboardAvoidingView } from 'react-native'
import { Picker } from '@react-native-community/picker'

import {
    CheckInput,
    PassInput,
    PrimaryButton,
    SimpleInput,
    StatusBarColor,
    SubTitleBoldText
} from '../../components'
import { getEstados, getCidades, postUser } from '../../services'
import { cadastroValidation, cpfMask, onlyStringMask, sortObjectArrayByKey } from '../../utils'
import { Base } from '../../styles'

import { styles } from './styles'

const Cadastro = (props) => {


    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('')
    const [selectUf, setSelectUf] = useState('')
    const [selectCidade, setSelectCidade] = useState('')
    const [terms, setTerms] = useState(false)

    const [loadingUfs, setLoadingUfs] = useState(false)
    const [loadingCidades, setLoadingCidades] = useState(false)

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
        const [test, testErrors] = cadastroValidation(nome, email, password, cpf, selectUf, selectCidade)

        if (!terms) {
            Alert.alert('Cadastro Inválido', 'É necessario concordar com os termos')
            return
        }
        else if (!test) {
            Alert.alert('Cadastro Inválido', testErrors.toString().replace(/,/g, '\n'))
            return
        }
        else {
            const user = {
                nome,
                email,
                password,
                cpf,
                uf: selectUf,
                cidade: selectCidade
            }

            try {
                postUser(user)
            }
            catch {
                Alert.alert('Cadastro Inválido', 'Não foi possivel cadastra no servidor!')
            }

            props.navigation.navigate('Login')
        }
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

                <SubTitleBoldText
                    style={styles.title}
                >
                    Faça seu cadastro para se declarar doador
                </SubTitleBoldText>

                <View style={styles.inputsContainer}>

                    <SimpleInput
                        onChangeText={(text) => setNome(onlyStringMask(text))}
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
                        onChangeText={(text) => setPassword(text)}
                        onSubmitEditing={() => cpfInputRef.current.focus()}
                        placeholder='Senha'
                        returnKeyType="next"
                        style={styles.cadastroInput}
                        value={password}
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

                    <CheckInput
                        label="Você concorda em ser um doador de orgãos?"
                        onPress={() => setTerms(!terms)}
                    />

                    <View style={styles.divider} />

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