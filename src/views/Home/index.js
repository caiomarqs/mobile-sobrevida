import React, { useContext, useEffect, useState } from 'react'
import { Button, SafeAreaView, View, ScrollView, Text } from 'react-native'

import { AuthContext, AUTH_ACTIONS } from '../../context'
import { HomeHeader, StatusBarColor, TitleText, SubTitleBoldText, HomeButton, FamilyIcon, DocumentIcon, ConfigIcon } from '../../components'
import { Widths, Colors } from '../../styles'
import { storeString, getData, storeData } from '../../utils'
import { getUser } from '../../services'

import { styles } from './styles'

const homeButtonsProps = [
    { title: 'Familiares', icon: <FamilyIcon />, route: 'Familiares' },
    { title: 'Depoimento', icon: <DocumentIcon />, route: 'Depoimento' },
    { title: 'Configurações', icon: <ConfigIcon />, route: 'Configuracoes' }
]

const slides = [
    { backgroundColor: Colors.vinhoP000 },
    { backgroundColor: Colors.verdeP000 },
]

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

                <ScrollView
                    style={styles.slideContainer}
                    horizontal
                    snapToInterval={Widths.WINDOW_WIDTH}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        slides.map((slide, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        ...styles.slide,
                                        backgroundColor: slide.backgroundColor,
                                        marginRight: index !== slides.length - 1 ? 16 : 0
                                    }}
                                />
                            )
                        })
                    }
                </ScrollView>

                <SubTitleBoldText style={styles.subTitle}>Funções</SubTitleBoldText>

                <View style={styles.homeButtonsContanier}>
                    {
                        homeButtonsProps.map(({ title, icon, route }, index) => {
                            return (
                                <HomeButton
                                    key={index}
                                    title={title}
                                    icon={icon}
                                    //Se for o ultimo botão ocupa toda a largura da tela
                                    style={{
                                        width: index === homeButtonsProps.length - 1 ? '100%' : (Widths.WINDOW_WIDTH - 48) / 2,
                                        marginRight: index === 0 ? 16 : 0,
                                        marginBottom: 16
                                    }}
                                    route={route}
                                    navigation={props.navigation}
                                />
                            )
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export { Home }

