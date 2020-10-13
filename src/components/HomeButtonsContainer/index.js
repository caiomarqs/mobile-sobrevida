import React from 'react'
import { View } from 'react-native'

import { ConfigIcon, DocumentIcon, FamilyIcon } from '../Icons'
import { HomeButton } from '../Buttons'
import { Widths } from '../../styles'

import { styles } from './styles'

const homeButtonsProps = [
    { title: 'Familiares', icon: <FamilyIcon />, route: 'Familiares' },
    { title: 'Depoimento', icon: <DocumentIcon />, route: 'Depoimento' },
    { title: 'Configurações', icon: <ConfigIcon />, route: 'Configuracoes' }
]

const HomeButtonsContainer = ({navigation, ...props }) => {
    return (
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
                            navigation={navigation}
                        />
                    )
                })
            }
        </View>
    )
}

export { HomeButtonsContainer }