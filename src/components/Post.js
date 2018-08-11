import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto
        }
    }

    loadIcon(liked) {
        if(liked == 1) {
            return require('../../resources/img/s2-checked.png');
        } else {
            return require('../../resources/img/s2.png');
        }
    }

    like() {
        const updatedFoto = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }

        this.setState({foto: updatedFoto})
    }

    render() {
        const { foto } = this.state;

        return (
            <View>
                <View style={styles.header}>
                    <Image source={{uri: foto.profile_photo}}
                        style={styles.profilePhoto} />
                    <Text>{foto.login}</Text>
                </View>
                <Image source={{uri: foto.url}}
                    style={styles.postPhoto}/>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image style={styles.likeButton}
                            source={this.loadIcon(foto.likeada)} />
                    </TouchableOpacity>
                </View>
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
    },
    likeButton: {
        width: 40,
        height: 40
    },
    footer: {
        margin: 10
    }
});
