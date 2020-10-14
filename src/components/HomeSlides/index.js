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
        image: familyIlustration,
        subTitle: 'Para que saibam da sua vontade, você deve cadastrar seus familiares!',
        title: 'Cadastre seus familires'
    },
    {
        backgroundColor: Colors.verdeP000,
        image: documentIlustration,
        subTitle: 'Para que fique registrado seu depoimento cadastre-o na plataforma para q seus familiares possam ve-lo',
        title: 'Cadastre seu depoimento'
    },
]

const HomeSlides = (props) => {

    const [xPos, setXPos] = useState(0)

    return (
        <View
            style={styles.container}
        >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={Widths.WINDOW_WIDTH}
                style={styles.slideContainer}
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
                                    <SlideTitleText
                                        style={{
                                            color: slide.backgroundColor === Colors.vinhoP000
                                                ? Colors.vinho000
                                                : Colors.verde000
                                        }}
                                    >
                                        {slide.title}
                                    </SlideTitleText>

                                    <CaptionLigthText>{slide.subTitle}</CaptionLigthText>
                                </View>

                                <Image
                                    style={styles.image}
                                    source={slide.image}
                                />
                            </View>
                        )
                    })
                }

            </ScrollView>
            <View style={styles.dotsContainer}>
                <Animated.View style={{
                    ...styles.dot,
                    backgroundColor: 16 - 8 * xPos / 344 >= 16 ? Colors.vinho000 : 'rgba(0, 0, 0, 0.3)',
                    marginRight: 8,
                    width: 16 - 8 * xPos / 344
                }} />
                <Animated.View style={{
                    ...styles.dot,
                    backgroundColor: 8 - (-8) * xPos / 344 >= 16 ? Colors.verde000 : 'rgba(0, 0, 0, 0.3)',
                    width: 8 - (-8) * xPos / 344
                }} />
            </View>
        </View>

    )
}

export { HomeSlides }