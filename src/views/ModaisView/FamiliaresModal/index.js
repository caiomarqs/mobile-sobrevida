import React, { useContext, useRef, useState } from 'react'
import { Animated, Image, View } from 'react-native'
import { Picker } from '@react-native-community/picker'

import {
    CaptionText,
    Modal,
    PrimaryButton,
    SimpleInput,
    TextButton,
    TitleText
} from '../../../components'
import {
    contatoMask,
    familiarNomeContatoValidation,
    familiarParentescoValidation,
    getData,
    onlyStringMask
} from '../../../utils'
import { Base, Widths } from '../../../styles'
import { GRAU_FAMILIAR } from '../../../constants'
import { postFamiliar } from '../../../services'
import { styles } from './styles'
import { FamiliarContex } from '../../../context'
import { FAMILIAR_ACTIONS } from '../../../reducers'

import FamilyImage from '../../../assets/img/familyIlustrationModal.png'

const FamiliaresModal = (props) => {

    const { dispatch } = useContext(FamiliarContex)

    const [nome, setNome] = useState('')
    const [contato, setContato] = useState('')
    const [parentesco, setParentesco] = useState(0)
    const [descParentesco, setDescParentesco] = useState('')

    const [xPos, setXPos] = useState(0)

    const [modal, setModal] = useState(false)

    const scrollRef = useRef()
    const contatoInputRef = useRef()


    const handleNextStep = () => {
        const [test, errors] = familiarNomeContatoValidation(nome, contato)

        if (test) {
            scrollRef.current.scrollTo({ x: xPos + 328, y: 0, animated: true })
            setXPos(xPos + 328)
        }
        else {
            alert(errors.toString())
        }

    }

    const handleBackStep = () => {
        if (xPos > 0) {
            scrollRef.current.scrollTo({ x: xPos - 328, y: 0, animated: true })
            setXPos(xPos - 328)
        }
    }

    const handleCadastrar = () => {

        const [test, errros] = familiarParentescoValidation(parentesco, descParentesco)

        if (test) {
            const familiar = {
                nome,
                parentesco,
                descParentesco,
                numero: contato
            }

            getData('userData').then((cache) => {
                postFamiliar(familiar, cache.id, cache.token).then(({ data }) => {
                    
                    dispatch({
                        type: FAMILIAR_ACTIONS.ADD_FAMILIAR,
                        payload: data
                    })

                    props.navigation.navigate('Familiares')
                })
            })
        }
        else {
            alert(errros.toString())
        }
    }

    return (
        <>
            <View style={styles.container}>
                <Image source={FamilyImage} style={styles.image} />
                <CaptionText style={styles.content}>
                    Você não tem nenhum familiar cadastrado, cadastre pelo menos um familiar para q ele saiba de sua vontade.
                </CaptionText>
                <TextButton
                    title="Cadastrar Familiar"
                    onPress={() => setModal(true)}
                />
            </View>

            <Modal
                show={modal}
                close={() => setModal(false)}
            >
                <Animated.ScrollView
                    horizontal
                    pagingEnabled={true}
                    ref={scrollRef}
                    scrollEnabled={
                        (contato.length > 14 && nome !== '')
                            ? true
                            : false
                    }
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={Widths.WINDOW_WIDTH}
                    style={styles.modalScroll}
                >
                    {/* Primeiro Slide */}
                    <View style={styles.modalSlide}>
                        <TitleText>Quais as informações do seu familiar?</TitleText>
                        <SimpleInput
                            onChangeText={(text) => setNome(onlyStringMask(text))}
                            onSubmitEditing={() => contatoInputRef.current.focus()}
                            placeholder="Nome Completo"
                            returnKeyType="next"
                            style={{ ...styles.input, marginTop: 12 }}
                            value={nome}
                        />
                        <SimpleInput
                            forwardRef={contatoInputRef}
                            maxLength={16}
                            onChangeText={(text) => setContato(contatoMask(text))}
                            onSubmitEditing={() => (
                                (contato.length > 14 && nome !== '')
                                    ? handleNextStep()
                                    : () => { }
                            )}
                            placeholder="Contato"
                            style={styles.input}
                            value={contato}
                        />
                        <TextButton
                            enable={
                                (contato.length > 14 && nome !== '')
                                    ? true
                                    : false
                            }
                            onPress={() => handleNextStep()}
                            style={{
                                alignSelf: 'flex-end',
                                ...styles.simpleButton
                            }}
                            title="Avançar"
                        />
                    </View>

                    {/* Segundo Slide */}
                    <View style={styles.modalSlide} >
                        <TitleText>Qual é o parentesco do seu familiar? </TitleText>
                        <Picker
                            onValueChange={(value) => setParentesco(value)}
                            selectedValue={parentesco ?? 0}
                            style={{
                                ...Base.pickerContainer,
                                ...styles.input
                            }}
                        >
                            <Picker.Item
                                label='Parentesco'
                                value={0}
                            />
                            {
                                GRAU_FAMILIAR.map((p, i) => {
                                    return (
                                        <Picker.Item
                                            key={i}
                                            label={p.label}
                                            value={p.value}
                                        />
                                    )
                                })
                            }
                        </Picker>
                        {
                            parentesco === "OUTRO"
                            &&
                            <SimpleInput
                                onChangeText={(text) => setDescParentesco(onlyStringMask(text))}
                                placeholder="Descreva seu parentesco"
                                style={styles.input}
                                value={descParentesco}
                            />
                        }
                        <TextButton
                            onPress={() => handleBackStep()}
                            style={styles.simpleButton}
                            title="Voltar"
                        />
                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                onPress={() => handleCadastrar()}
                                title="Cadastrar"
                            />
                        </View>
                    </View>

                </Animated.ScrollView>
            </Modal>
        </>
    )
}

export { FamiliaresModal }