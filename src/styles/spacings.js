import { Dimensions, StatusBar, Platform } from 'react-native'

const Paddings = {
    viewContainerPaddingHorizontal: 16
}

const Margins = {

}

const DEVICE_HEIGHT = Dimensions.get('screen').height
const STATUS_BAR = StatusBar.statusBarHeight || 24
const WINDOW_HEIGHT = Dimensions.get('window').height
const NAVIGATION_BAR = Platform.OS == "ios" ? 0 : DEVICE_HEIGHT - WINDOW_HEIGHT

const Heigths = { DEVICE_HEIGHT, STATUS_BAR, WINDOW_HEIGHT, NAVIGATION_BAR }


const DEVICE_WIDTH = Dimensions.get('screen').width
const WINDOW_WIDTH = Dimensions.get('window').width

const Widths = { DEVICE_WIDTH, WINDOW_WIDTH }

export { Paddings, Margins, Heigths, Widths }