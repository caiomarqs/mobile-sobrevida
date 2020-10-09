import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Platform, Alert, KeyboardAvoidingView } from 'react-native'
import { Picker, PickerIOS } from '@react-native-community/picker'

import { SimpleInput, StatusBarColor, PassInput, TextSubTitle2, PrimaryButton } from '../../components'
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
        else {
            Alert.alert('Cadastro Inválido', testErrors.toString().replace(/,/g, '\n'))
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarColor
                backgroundColor={'transparent'}
                barStyle='dark-content'
                hasHeader={true}
            />
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TextSubTitle2 style={styles.title}>Faça seu cadastro para se declarar doador</TextSubTitle2>
                <View style={styles.inputsContainer}>
                    <SimpleInput style={styles.cadastroInput} placeholder='Nome completo' onChangeText={(text) => setNome(onlyStringMask(text))} value={nome} />
                    <SimpleInput style={styles.cadastroInput} placeholder='Email' onChangeText={(text) => setEmail(text)} value={email} />
                    <PassInput style={styles.cadastroInput} placeholder='Senha' onChangeText={(text) => setSenha(text)} value={senha} />
                    <SimpleInput style={styles.cadastroInput} placeholder='Cpf' onChangeText={(text) => setCpf(cpfMask(text))} value={cpf} maxLength={14} />
                    {
                        loadingUfs
                        &&
                        <Picker
                            onValueChange={(value) => handleCarregarCidades(value)}
                            selectedValue={selectUf ?? 0}
                            style={{ ...Base.pickerContainer }}
                        >
                            <Picker.Item label='Uf' value={0} />
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
                    <View style={styles.inputsContainer}></View>
                    <PrimaryButton style={styles.button} title="Cadastrar" onPress={() => handleCadastrar()} />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export { Cadastro }