import { Colors } from './colors'

const Base = {
    viewContainer: {
        flex: 1
    },
    whiteNavigator: {
        backgroundColor: Colors.branco000,
        contentColor: Colors.preto000
    },
    colorNavigator: {
        backgroundColor: Colors.vinho000,
        contentColor: Colors.branco000
    },
    inputContainer: {
        height: 48,
        borderBottomColor: Colors.cinza000,
        borderBottomWidth: .8,
        fontFamily: "SFUIDisplay-Medium",
    },
    pickerContainer: {
        height: 48,
        fontFamily: "SFUIDisplay-Medium",
        borderBottomColor: Colors.cinza000,
        borderBottomWidth: .8,
        width: '100%'
    },
    primaryButton: {
        height: 48,
        backgroundColor: Colors.vinho000,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: .8, 
        shadowOpacity: .8
    }
}

export { Base }