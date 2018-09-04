import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';
import styles from '../styles';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import logo from '../img/logo.png';

class FormLogin extends Component {
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <StatusBar
                    backgroundColor="rgba(255, 0, 0, 0.6)"
                    barStyle='dark-content'
                />
                <View style={{ height: 80 }} />
                    <Image
                    style={styles.logoLogin}
                    source={logo}
                />
                <TextInput 
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='CPF'
                    placeholderTextColor='#8190A5'
                    autoCapitalize='none'
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.inputBox}
                    placeholder='Senha'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholderTextColor='#8190A5'
                    autoCapitalize='none'
                />
                <TouchableOpacity
                    style={styles.submit}
                    onPress={() => false}
                    underlayColor='#fff'>
                    <Text style={styles.submitText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('FormCadastro')}
                >
                    <Text style={styles.textRegister}>Ainda não tem cadastro? Cadastre-se!</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('FormCadastro')}
                >
                    <Text style={styles.textRegister}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
                
        </KeyboardAvoidingView>
        );
    }
}

export default FormLogin;
