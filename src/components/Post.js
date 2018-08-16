import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList, TouchableOpacity, TextInput} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto,
            commentValue: ''
        }
    }

    loadIcon(liked) {
        if(liked == 1) {
            return require('../../resources/img/s2-checked.png');
        } else {
            return require('../../resources/img/s2.png');
        }
    }

    showLikers(likers) {
        return likers.length > 0 &&
            <Text style={styles.likes}>
                {likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}
            </Text>
    }

    showCaption(foto) {
        return foto.comentario !== '' &&
            <View style={styles.comment}>
                <Text style={styles.commentTitle}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View>
    }

    like() {
        const { foto } = this.state;

        let novaLista = [];
        if(!foto.likeada){
            novaLista = [
                ...foto.likers,
                {login: 'meuUsuario'}
            ]
        } else {
            novaLista = foto.likers.filter(liker => {
                return liker.login !== 'meuUsuario';
            });
        }

        const updatedFoto = {
            ...foto,
            likeada: !foto.likeada,
            likers: novaLista
        }

        this.setState({foto: updatedFoto})
    }

    addComment() {
        if(this.state.commentValue === '')
            return;

        const novaLista = [...this.state.foto.comentarios, {
            id: this.state.commentValue,
            login: 'meuUsuario',
            texto: this.state.commentValue
        }];

        const fotoAtualizada = {
            ...this.state.foto,
            comentarios: novaLista
        }

        this.setState({foto: fotoAtualizada, commentValue: ''});
        this.commentInput.clear();
    }

    render() {
        const { foto } = this.state;

        return (
            <View>
                <View style={styles.header}>
                    <Image source={{uri: foto.urlPerfil}}
                        style={styles.profilePhoto} />
                    <Text>{foto.loginUsuario}</Text>
                </View>
                <Image source={{uri: foto.urlFoto}}
                    style={styles.postPhoto}/>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image style={styles.likeButton}
                            source={this.loadIcon(foto.likeada)} />
                    </TouchableOpacity>

                    {this.showLikers(foto.likers)}
                    {this.showCaption(foto)}

                    {foto.comentarios.map(comentario =>
                        <View style={styles.comment} key={comentario.id}>
                            <Text style={styles.commentTitle}>{comentario.login}</Text>
                            <Text>{comentario.texto}</Text>
                        </View>
                    )}

                    <View style={styles.newComment}>
                        <TextInput style={styles.commentInput}
                            placeholder="Adicione um comentário..."
                            ref={input => this.commentInput = input}
                            onChangeText={texto => this.setState({commentValue: texto})}
                            underlineColorAndroid="transparent" />

                        <TouchableOpacity onPress={this.addComment.bind(this)}>
                            <Image style={styles.commentIcon}
                                source={require('../../resources/img/send.png')} />
                        </TouchableOpacity>
                    </View>
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
        height: 40,
        marginBottom: 10
    },
    footer: {
        margin: 10
    },
    likes: {
        fontWeight: 'bold'
    },
    comment: {
        flexDirection: 'row',
        marginTop: 5
    },
    commentTitle: {
        fontWeight: 'bold',
        marginRight: 5
    },
    newComment: {
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
