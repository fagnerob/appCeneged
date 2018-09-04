import {
    StyleSheet,
    Dimensions
} from 'react-native';
const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 3;
export const IMAGE_HEIGHT_SMALL = window.width / 7;

export default StyleSheet.create({
   container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgLogo: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginBottom: 30,
        marginTop: 10,
    },
    inputBox: {
        fontSize: 18,
        fontFamily: 'VarelaRound-Regular',
        width: window.width -50,
        height: 45,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 18,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#8492A6',
        marginHorizontal: 6,
        marginVertical: 5,
    },
    submit: {
        paddingTop: 7,
        marginTop: 10,
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#fff',
        height: 44,
        width: window.width -50,
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'VarelaRound-Regular',
    },
    textRegister: {
        marginTop: 10,
        fontSize: 14,
        color: '#8190A5',
        fontFamily: 'VarelaRound-Regular',
    },
    submitCadastro: {
        paddingTop: 7,
        backgroundColor: 'rgba(255, 0, 0, 0.7)',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#fff',
        height: 44,
        width: window.width -50,
        marginBottom: 30,
        marginTop: 20,
    },
    logoLogin: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginTop: -100,
        marginBottom: 50
    },
    logoCadastro: {
        height: IMAGE_HEIGHT,
        resizeMode: 'contain',
        marginTop: 35,
        marginBottom: 10
    }


});