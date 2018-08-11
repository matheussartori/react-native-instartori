import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <Image source={{uri: this.props.foto.profile_photo}}
                        style={styles.profilePhoto}/>
                    <Text>{this.props.foto.login}</Text>
                </View>
                <Image source={{uri: this.props.foto.url}}
                    style={styles.postPhoto}/>
            </View>
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
