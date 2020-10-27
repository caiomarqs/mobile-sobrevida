import React, { useContext, useEffect, useRef, useState } from 'react'
import { Animated, View } from 'react-native'
import { Picker } from '@react-native-community/picker'

import {
    Modal,
    PrimaryButton,
    SimpleInput,
    TextButton,
    TitleText
} from '../../components'
import {
    contatoMask,
    familiarNomeContatoValidation,
    familiarParentescoValidation,
    getData,
    onlyStringMask
} from '../../utils'
import { Base, Widths } from '../../styles'
import { GRAU_FAMILIAR } from '../../constants'
import { getAllFamiliaresByUser, postFamiliar, putFamiliar } from '../../services'
import { FamiliarContex } from '../../context'
import { FAMILIAR_ACTIONS } from '../../reducers'


import { styles } from './styles'

const SLIDE_WIDTH = Widths.DEVICE_WIDTH - 32

const ModalHandleFamiliar = ({ naviagtion, show, close, familiar = {} }) => {

    const { dispatch } = useContext(FamiliarContex)

    const [nome, setNome] = useState('')
    const [contato, setContato] = useState('')
    const [parentesco, setParentesco] = useState(0)
    const [descParentesco, setDescParentesco] = useState('')

    const [xPos, setXPos] = useState(0)

    const scrollRef = useRef()
    const contatoInputRef = useRef()


    useEffect(() => {
        if (Object.keys(familiar).length > 0) {
            setNome(`${familiar.nome} ${familiar.sobreNome}`)
            setContato(familiar.contatos[0].numero)
            setParentesco(familiar.parentesco)
            setDescParentesco(familiar.descParentesco)
        }
    }, [])

    const clearState = () => {
        setNome('')
        setContato('')
        setParentesco(0)
        setDescParentesco('')
    }

    const handleNextStep = () => {
        const [test, errors] = familiarNomeContatoValidation(nome, contato)

        if (test) {
            scrollRef.current.scrollTo({ x: xPos + SLIDE_WIDTH, y: 0, animated: true })
            setXPos(xPos + SLIDE_WIDTH)
        }
        else {
            alert(errors.toString())
        }

    }

    const handleBackStep = () => {
        if (xPos > 0) {
            scrollRef.current.scrollTo({ x: xPos - SLIDE_WIDTH, y: 0, animated: true })
            setXPos(xPos - SLIDE_WIDTH)
        }
    }

    const handleCadastrar = () => {

        const [test, errros] = familiarParentescoValidation(parentesco, descParentesco)

        if (test) {
            const familiarCadastro = {
                nome,
                parentesco,
                descParentesco,
                numero: contato
            }

            getData('userData').then((cache) => {
                postFamiliar(familiarCadastro, cache.id, cache.token).then(({ data }) => {

                    dispatch({
                        type: FAMILIAR_ACTIONS.ADD_FAMILIAR,
                        payload: data
                    })

                    naviagtion.navigate('Familiares')
                    close()
                })
            })

            clearState()
        }
        else {
            alert(errros.toString())
        }
    }

    const handleAtualizar = () => {
        const [test, errros] = familiarParentescoValidation(parentesco, descParentesco)

        if (test) {

            // Atualiza os valores novos
            const familiarUpdate = {
                ...familiar,
                nome,
                parentesco,
                descParentesco,
                numero: contato
            }

            getData('userData').then((cache) => {
                putFamiliar(familiarUpdate, cache.id, cache.token).then(_ => {

                    getAllFamiliaresByUser(cache.id, cache.token).then(({ data }) => {
                        dispatch({
                            type: FAMILIAR_ACTIONS.GET_ALL_FAMILIAR,
                            payload: data
                        })
                        naviagtion.navigate('Familiares')
                        close()
                    })

                })
            })

            clearState()
        }
        else {
            alert(errros.toString())
        }
    }

    return (

        <Modal
            show={show}
            close={close}
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

                        {
                            //Se receber algum familiar irá atualizar
                            Object.keys(familiar).length > 0
                                ? < PrimaryButton onPress={() => handleAtualizar()} title="Atualizar" />
                                : < PrimaryButton onPress={() => handleCadastrar()} title="Cadastrar" />
                        }
                    </View>
                </View>

            </Animated.ScrollView>
        </Modal>
    )
}

export { ModalHandleFamiliar }