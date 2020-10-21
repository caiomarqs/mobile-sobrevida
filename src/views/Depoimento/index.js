import React, { useContext, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'

import { SubTitleBoldText, PrimaryButton, TextArea, ModalNavigator, ModalStack, CloseIcon } from '../../components'
import { UserContext } from '../../context'
import { DepoimentoModal } from '../Modais'

import { styles } from './styles'


const DepoimentoStackScreen = (props) => {

    const { userState } = useContext(UserContext)


    return (
        <ModalNavigator>
            {
                userState.user.depoimento
                    ?
                    <ModalStack.Screen
                        name="Depoimento"
                        component={Depoimento}
                    />
                    :
                    <>
                        <ModalStack.Screen
                            name="Modal"
                            component={DepoimentoModal}
                            options={{
                                title: "",
                                headerBackImage: () => <CloseIcon />
                            }}
                        />
                        <ModalStack.Screen
                            name="Depoimento"
                            component={Depoimento}
                        />
                    </>
            }

        </ModalNavigator>
    )
}

const Depoimento = (props) => {

    return (
        <SafeAreaView style={styles.container}>
            <SubTitleBoldText style={styles.title}>Lorem Ipsum</SubTitleBoldText>
            <TextArea />
            <View style={styles.buttonContainer}>
                <PrimaryButton title="Salvar" style={styles.button} />
            </View>
        </SafeAreaView>
    )
}

export { DepoimentoStackScreen }