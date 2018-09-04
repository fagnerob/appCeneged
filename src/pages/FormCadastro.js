import React, { Component } from 'react';
import { View, TextInput,Text, ScrollView, Animated,TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../styles';
import logo from '../img/logo.png';

class FormCadastro extends Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount () {
   if (Platform.OS=='ios'){
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
   }else{
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
   }

  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };


  keyboardDidShow = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardDidHide = (event) => {
    Animated.timing(this.imageHeight, {
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#F5F5F5',alignItems:'center'}}>
       
       <Animated.Image source={logo} style={[styles.logoCadastro, { height: this.imageHeight }]} />
       <ScrollView style={{flex:1}}>
      
         <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <TextInput
            placeholder="Nome"
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholderTextColor = '#8190A5'
          />

          <TextInput
            placeholder="Sobrenome"
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholderTextColor = '#8190A5'
          />
          <TextInput
            placeholder="Email"
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholderTextColor = '#8190A5'
            autoCapitalize = 'none'
          />
          <TextInput
            placeholder="CPF"
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholderTextColor = '#8190A5'
            autoCapitalize = 'none'
            keyboardType = 'numeric'
          />
          <TextInput
            placeholder="Senha"
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholderTextColor = '#8190A5'
            autoCapitalize = 'none'
          />
          <TextInput
            placeholder="Confirmar Senha"
            style={styles.inputBox}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholderTextColor = '#8190A5'
            autoCapitalize = 'none'
          />
      </KeyboardAvoidingView>
      </ScrollView>
      <View>
      <TouchableOpacity style={styles.submitCadastro}><Text style={styles.submitText}>Cadastrar</Text></TouchableOpacity>
      </View>
      </View>
    );
  }
};

export default FormCadastro;
