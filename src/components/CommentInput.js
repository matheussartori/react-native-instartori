import React, {Component} from 'react';
import {StyleSheet, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default class CommentInput extends Component {

    constructor() {
        super();
        this.state = {
            commentValue: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.commentInput}
                    placeholder="Adicione um comentário..."
                    ref={input => this.commentInput = input}
                    onChangeText={texto => this.setState({commentValue: texto})}
                    underlineColorAndroid="transparent" />

                <TouchableOpacity onPress={() => {
                    this.props.commentCallback(this.state.commentValue, this.commentInput);
                    this.setState({commentValue: ''});
                }}>
                    <Image style={styles.commentIcon}
                        source={require('../../resources/img/send.png')} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    commentInput: {
        flex: 1,
        height: 40
    },
    commentIcon: {
        width: 30,
        height: 30
    }
});
