import React from 'react'
import { ScrollView, View} from 'react-native'

import { Widths, Colors } from '../../styles'

import { styles } from './styles'

const slides = [
    { backgroundColor: Colors.vinhoP000 },
    { backgroundColor: Colors.verdeP000 },
]

const HomeSlides = (props) => {
    return (
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
    )
}

export { HomeSlides }