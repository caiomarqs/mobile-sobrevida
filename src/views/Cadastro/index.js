import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Platform } from 'react-native'
import { Picker, PickerIOS } from '@react-native-community/picker'


import { SimpleInput, StatusBarColor, PassInput, TextSubTitle2 } from '../../components'
import { getEstados, getCidades } from '../../services'
import { sortObjectArrayByKey } from '../../utils'
import { styles } from './styles'
import { Base } from '../../styles'

const Cadastro = () => {

    const [loadingUfs, setLoadingUfs] = useState(false)
    const [loadingCidades, setLoadingCidades] = useState(false)
    const [cidadesIBGE, setCidadesIBGE] = useState([])
    const [ufsIBGE, setUfsIBGE] = useState([])
    const [selectUf, setSelectUf] = useState('')
    const [selectCidade, setSelectCidade] = useState('')

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

        if(uf === 0) {
            setLoadingCidades(false)
            return
        }

        getCidades(uf).then(({ data }) => {
            setCidadesIBGE(data)
            setLoadingCidades(true)
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarColor
                backgroundColor={'transparent'}
                barStyle='dark-content'
                hasHeader={true}
            />
            <TextSubTitle2 style={styles.title}>Faça seu cadastro para se declarar doador</TextSubTitle2>
            <View style={styles.inputsContainer}>
                <SimpleInput style={styles.cadastroInput} placeholder='Nome completo' />
                <SimpleInput style={styles.cadastroInput} placeholder='Email' />
                <PassInput style={styles.cadastroInput} placeholder='Senha' />
                <SimpleInput style={styles.cadastroInput} placeholder='Cpf' />
                {
                    loadingUfs
                    &&
                    <Picker
                        onValueChange={(value) => handleCarregarCidades(value)}
                        selectedValue={selectUf ?? 0}
                        style={{...Base.pickerContainer}}
                        itemStyle={{fontFamily: "SFUIDisplay-Medium" }}
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
                        style={{...Base.pickerContainer}}
                        itemStyle={{ backgroundColor: "grey", color: "blue", fontSize:17 }}
                        // itemStyle={{fontFamily: "SFUIDisplay-Medium" }}
                    >
                        <Picker.Item label='Cidade' value={0} />
                        {
                            cidadesIBGE.map((cidade, i) => {
                                return <Picker.Item key={i + cidade.id} label={cidade.nome} value={cidade.nome} />
                            })
                        }
                    </Picker>
                }
            </View>
        </SafeAreaView>
    )
}

export { Cadastro }