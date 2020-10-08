import { Dimensions, StatusBar, Platform } from 'react-native'

const Paddings = {
    viewContainerPaddingHorizontal: 16
}

const Margins = {

}

const DEVICE_HEIGHT = Dimensions.get('screen').height
const STATUS_BAR = StatusBar.statusBarHeight || 24
const WINDOW_HEIGHT = Dimensions.get('window').height
const NAVIGATION_BAR = Platform.OS == "ios" ? 0 : DEVICE_HEIGHT - (STATUS_BAR + WINDOW_HEIGHT)


const Heigths = { DEVICE_HEIGHT, STATUS_BAR, WINDOW_HEIGHT, NAVIGATION_BAR }

export { Paddings, Margins, Heigths }