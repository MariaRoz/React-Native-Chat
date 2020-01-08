import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { getMessages } from "../service/chatApi";
import {clearAsyncStorage, getToken} from "../service/asyncStorage";

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };
    };

    async componentDidMount() {
        const token = await this.AuthGuard();
        if (token) {
            const messagesInfo = await getMessages();
            this.setState({messages: messagesInfo});
        }
    };

    async AuthGuard () {
        const userToken = await getToken();
        this.props.navigation.navigate(userToken ? 'Chat' : 'Register');
        return userToken;
    }

     async logOut() {
        await clearAsyncStorage();
        this.props.navigation.navigate('Register')
    };

    render() {
        const {navigation} = this.props;
        const errorMessage= 'Unauthorized';
        return (
            <View>
                { this.state.messages.error === errorMessage ?
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
