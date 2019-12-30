import React from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { authUser } from "../service/authenticationApi";
import {setToken } from "../service/asyncStorage";

export default class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    };

    handleSubmit = () => {
        authUser(this.state.username, this.state.password, 'register').then((responseData) => {
            this.setState({
                isLoading: false,
                token: responseData.access_token
            });
            setToken(this.state.token).then(this.props.navigation.navigate('Chat'));
        });
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <Button
                    title={'Register'}
                    color={'#ff4081'}
                    onPress={ () => this.handleSubmit()}
                />
                <View style = {styles.message}>
                    <Button
                        title={'Already registered? Sign In'}
                        color={'#ff4081'}
                        onPress={ () => navigate('Login')}
                    />
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    message: {
        marginTop: 10,
    }
});
