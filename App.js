/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList} from 'react-native';

const width = Dimensions.get('screen').width;

export default class App extends Component {
  render() {
      const fotos = [{id: 1, usuario: 'matheus'}
      ,{id: 2, usuario: 'ronaldo'}
      ,{id: 3, usuario: 'victor'}];

    return (
        <FlatList
            keyExtractor={item => String(item.id)}
            data={fotos}
            renderItem={ ({item}) =>
            <View>
                <View style={styles.header}>
                    <Image source={require('./resources/img/alura.jpg')}
                        style={styles.profilePhoto}/>
                    <Text>{item.usuario}</Text>
                </View>
                <Image source={require('./resources/img/alura.jpg')}
                    style={styles.postPhoto}/>
            </View>
            }
        />
    );
  }
}

const styles = StyleSheet.create({
    header: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    profilePhoto: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40
    },
    postPhoto: {
        width: width,
        height: width
    }
});
