import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, StyleSheet, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

class FormLogin extends Component {
    render() {
        return (
        <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 50, }}>
            <Image
            source={require('../img/logo.png')}
            style={styles.imgLogo}
            />
        </View>
        <View style={{ flex: 2 }}>
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Email' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Senha' />
            <TouchableHighlight onPress={() => Actions.formCadastro()}>
            <Text style={{ fontSize: 17, padding: 3 }}>Ainda não tem cadastro? Cadastre-se!</Text>
            </TouchableHighlight>
        </View>
        <View style={{ flex: 2, justifyContent: 'space-between', marginTop: 70 }}>
            <Button color='#E93237' title="Acessar" onPress={() => false} />
        </View>
    </View>
        );
    }
}

export default FormLogin;

const styles = StyleSheet.create({
    imgLogo: {
        width: 130,
        height: 110
    }

});
