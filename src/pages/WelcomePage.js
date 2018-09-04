import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    StyleSheet,
    Image,
    StatusBar,
} from 'react-native';

class FormLogin extends Component {
    render() {
        return (
            
        <View style={styles.container}>
            <View>
                <StatusBar
                    backgroundColor="rgba(255, 0, 0, 0.6)"
                    barStyle="dark-content"
                    animated={true}
                />
            </View>
            <View style={styles.containerImgLogo}>
                <Image
                source={require('../img/logo.png')}
                style={styles.imgLogo}
                />
            </View>

            <View style={styles.containerWelcome}>
                <View>
                    <Text style={[styles.textWelcome, styles.textBemVindo]}>Bem Vindo!</Text>
                    <Text style={styles.textWelcome}>Olá, seja bem vindo ao App da CENEGED.</Text>
                    <Text style={styles.textWelcome}>Use nossas ferramentas</Text>
                </View>
        
                <View>
                    <TouchableOpacity
                        style={styles.submit}
                        onPress = {
                            () => this.props.navigation.navigate('FormLogin')
                        }
                        underlayColor='#fff'>
                        <Text style={styles.submitText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormCadastro')}>
                        <Text style={styles.textCadastro}>Ainda não tem cadastro? Cadastre-se!</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a9a9a9',
        
    },
    containerImgLogo: {
        flex: 7,
        backgroundColor: '#a5f5f5',
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerWelcome: {
        flex: 4,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
    },
    imgLogo: {
        width: 130,
        height: 110,
    },
    textCadastro: {
        fontSize: 14,
        paddingTop: 6,
        alignSelf: 'center',
        fontFamily: 'VarelaRound-Regular',
    },
    submit: {
        paddingTop: 7,
        backgroundColor: 'rgba(255, 0, 0, 0.6)',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#fff',
        height: 44,
        width: 280,
    },
    submitText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'VarelaRound-Regular',
    },
    textWelcome: {
        alignSelf: 'center',
        fontSize: 15,
        paddingTop: 5,
        fontFamily: 'VarelaRound-Regular',
        color: '#000'
    },
    textBemVindo: {
        fontFamily: 'VarelaRound-Regular',
        fontSize: 22,
    }
});

export default FormLogin;
