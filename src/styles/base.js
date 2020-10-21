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
    },
    checkInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: "flex-start"
    },
    checkInputCheck: {
        height: 16,
        width: 16,
        backgroundColor: Colors.cinza000,
        marginRight: 8,
        borderRadius: 4
    },
    homeButton: {
        height: 116,
        backgroundColor: Colors.cinza000,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textArea: {
        borderWidth: .8,
        borderColor: Colors.cinza200,
        paddingHorizontal: 8,
        borderRadius: 4
    }
}

export { Base }