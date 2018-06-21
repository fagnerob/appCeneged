import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

export default class FormCadastro extends Component {
    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ flex: 4, justifyContent: 'center' }}>
                    <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Nome' />
                    <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Email' />
                    <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Senha' />
                </View>
                <View style={{ flex: 1 }}>
                    <Button color='#B22222' title="Cadastrar" onPress={() => false} />
                </View>
            </View>
        );
    }
}
