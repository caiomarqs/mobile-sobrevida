import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView, View } from 'react-native'

import {
    HomeButtonsContainer,
    HomeHeader,
    HomeSlides,
    StatusBarColor,
    SubTitleBoldText,
    TitleText
} from '../../components'

import { AuthContext, AUTH_ACTIONS } from '../../context'

import { storeString, getData, storeData } from '../../utils'
import { getUser } from '../../services'

import { styles } from './styles'


const Home = (props) => {

    const { dispatch } = useContext(AuthContext)
    const [nome, setNome] = useState('')

    useEffect(() => {
        getData('userData').then((user) => {
            getUser(user.id, user.token).then(({ data }) => {
                setNome(data.nome)
            })
        })
    }, [])

    const handleLogOut = () => {
        try {
            storeString('keepLogin', 'false')
            storeData('userData', {})
            dispatch({ type: AUTH_ACTIONS.LOGOUT })
        } catch (error) {
            alert('Não foi possivel dazer o login')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBarColor
                backgroundColor='transparent'
                barStyle='dark-content'
            />

            <HomeHeader logOut={() => handleLogOut()} />

            <View style={styles.contentContainer}>
                <TitleText style={styles.title}>Ola, {`\n${nome}`}</TitleText>

                <HomeSlides />

                <SubTitleBoldText style={styles.subTitle}>Funções</SubTitleBoldText>

                <HomeButtonsContainer navigation={props.navigation} />
            </View>
        </SafeAreaView>
    )
}

export { Home }

