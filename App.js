/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  render() {
      const fotos = [{id: 1, usuario: 'matheus'}
      ,{id: 2, usuario: 'ronaldo'}
      ,{id: 3, usuario: 'victor'}];

    return (
        <View>
        {fotos.map(foto =>
            <View key={foto.id}>
                <Text>{foto.usuario}</Text>
                <Image source={require('./resources/img/alura.jpg')}
                    style={{width: width, height: width}}/>
            </View>
        )}
        </View>
    );
  }
}

const styles = StyleSheet.create({

});
