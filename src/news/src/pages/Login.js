import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  Text,
} from 'react-native';

import InputComponent from '../components/Input';

import Index from './tab/Index';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

export default function (props) {
  return (
    <View style={styles.container}>
      <Image style={styles.stretch} resizeMode={'contain'}  source={require('../assets/LOGO-1.png')} />
      <InputComponent placeholder="Email" />
      <InputComponent placeholder="Senha" />
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Index')}>
        <Text style={styles.text}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    paddingBottom: '10%',
  },
  stretch: {
    flex: 1,
    margin:"15%",
    justifyContent: 'center',
    alignItems: 'center',

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: '#C68585',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
