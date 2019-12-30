import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { getMessages } from "../service/chatApi";
import {clearAsyncStorage, getToken} from "../service/asyncStorage";

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        getToken().then(userToken => this.props.navigation.navigate(userToken ? 'Chat' : 'Register'));

        this.state = {
            messages: [],
        };
    };

    componentDidMount() {
        getMessages().then(messagesInfo => {
            this.setState({messages: messagesInfo});
    });
    };

    logOut() {
        clearAsyncStorage().then(this.props.navigation.navigate('Register'));
    };

    render() {
        const {navigation} = this.props;
        return (
            <View>
                { this.state.messages.error === 'Unauthorized' ?
                    (<View>
                        <Button onPress={() => navigation.navigate('Register')} title='Register'/>
                    </View>)
                  : (<View>
                        <Button title='LogOut' onPress={() => this.logOut()} />
                        {this.state.messages.map((data, i) => <Text key={i}>{data.message}</Text>)}
                    </View>)
                }
            </View>
        );
    };
};

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
    },
});
