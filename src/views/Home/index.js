import React, { useContext } from 'react'
import { Button, SafeAreaView, Text, View, ScrollView } from 'react-native'

import { AuthContext, AUTH_ACTIONS } from '../../context'
import { HomeHeader, StatusBarColor, TitleText, SubTitleBoldText, HomeButton, FamilyIcon, DocumentIcon, ConfigIcon } from '../../components'
import { Heigths, Widths } from '../../styles'

import { styles } from './styles'

const homeButtonsProps = [
    { title: 'Familiares', icon: <FamilyIcon />, route: 'Familiares' },
    { title: 'Depoimento', icon: <DocumentIcon />, route: 'Depoimento' },
    { title: 'Configurações', icon: <ConfigIcon />, route: 'Configuracoes' }
]

const Home = (props) => {

    const { dispatch } = useContext(AuthContext)

    const handleLogOut = () => {
        dispatch({ type: AUTH_ACTIONS.LOGOUT })
    }

    return (
        <SafeAreaView>
            <StatusBarColor
                backgroundColor='transparent'
                barStyle='dark-content'
            />
            <ScrollView>
                <HomeHeader logOut={() => handleLogOut()} />

                <View style={styles.container}>
                    <TitleText style={styles.title}>Ola, Fulano</TitleText>

                    <View style={styles.slideContainer}>
                        <View style={styles.slide} />
                    </View>

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
                                            marginBottom: index === homeButtonsProps.length - 1 ? Heigths.NAVIGATION_BAR + 16 : 16
                                        }}
                                        route={route}
                                        navigation={props.navigation}
                                    />
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export { Home }