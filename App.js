/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList} from 'react-native';
import Post from './src/components/Post';

const width = Dimensions.get('screen').width;

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            fotos: []
        }
    }

    componentDidMount() {
        fetch('http://192.168.1.103:8080/api/public/fotos/mssartori')
            .then(response => response.json())
            .then(json => this.setState({fotos: json}))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <FlatList
                data={this.state.fotos}
                keyExtractor={item => String(item.id)}
                renderItem={ ({item}) =>
                    <Post foto={item} />
                }
            />
        );
    }
}

const styles = StyleSheet.create({

});
