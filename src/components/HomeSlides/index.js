import React, { useEffect, useState } from 'react'
import { ScrollView, View, Image, Animated } from 'react-native'

import { CaptionLigthText, SlideTitleText } from '../Texts'
import { Widths, Colors } from '../../styles'

import { styles } from './styles'

import familyIlustration from '../../assets/img/familyIlustration.png'
import documentIlustration from '../../assets/img/documentIlustration.png'

const slides = [
    {
        backgroundColor: Colors.vinhoP000,
        title: 'Cadastre seus familires',
        subTitle: 'Para que saibam da sua vontade, você deve cadastrar seus familiares!',
        image: familyIlustration
    },
    {
        backgroundColor: Colors.verdeP000,
        title: 'Cadastre seu depoimento',
        subTitle: 'Para que fique registrado seu depoimento cadastre-o na plataforma para q seus familiares possam ve-lo',
        image: documentIlustration
    },
]

const HomeSlides = (props) => {

    const [xPos, setXPos] = useState(0)

    return (
        <View
            style={styles.container}
        >
            <CaptionLigthText>{16 - 8 * xPos / 344}</CaptionLigthText>
            <ScrollView
                style={styles.slideContainer}
                horizontal
                snapToInterval={Widths.WINDOW_WIDTH}
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    setXPos(event.nativeEvent.contentOffset.x)
                }}
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
                            >
                                <View>
                                    <SlideTitleText style={{ color: slide.backgroundColor === Colors.vinhoP000 ? Colors.vinho000 : Colors.verde000 }} >{slide.title}</SlideTitleText>
                                    <CaptionLigthText>{slide.subTitle}</CaptionLigthText>
                                </View>

                                <Image style={styles.image} source={slide.image} />
                            </View>
                        )
                    })
                }

            </ScrollView>
            <View style={styles.dotsContainer}>
                <Animated.View style={{ ...styles.dot, width: 16 - 8 * xPos / 344, marginRight: 8 }} />
                <Animated.View style={{ ...styles.dot, width: 16 - 8 * xPos / 344 }} />
            </View>
        </View>

    )
}

export { HomeSlides }