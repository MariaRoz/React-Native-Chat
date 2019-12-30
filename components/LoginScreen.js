import React from 'react';
import { StyleSheet, View, TextInput, Button, AsyncStorage } from 'react-native';
import { loginUser } from "../service/authentication-api";

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    };
    handleSubmit = () => {
        loginUser(this.state.username, this.state.password).then((responseData) => {
            this.setState({
                isLoading: false,
                token: responseData.access_token
            });
            AsyncStorage.setItem('token', this.state.token);
            this.props.navigation.navigate('Chat');
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
                    title={'Login'}
                    color={'#ff4081'}
                    onPress={ () => this.handleSubmit()}
                />
                <View style = {styles.message}>
                    <Button
                        title={'Not registered? Create an account'}
                        color={'#ff4081'}
                        onPress={ () => navigate('Register')}
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
