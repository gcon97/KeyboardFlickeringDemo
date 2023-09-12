/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, TextInput} from 'react-native';

export function App() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        placeholder="Username"
        style={{fontSize: 22, padding: 4, margin: 2}}
        placeholderTextColor={'#B4B4B4'}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={{fontSize: 22, padding: 4, margin: 2}}
        placeholderTextColor={'#B4B4B4'}
      />
    </SafeAreaView>
  );
}

export default App;
