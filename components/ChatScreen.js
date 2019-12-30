import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { getMessages } from "../service/chat-api";

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        };
    };
    componentDidMount() {
        getMessages().then(messagesInfo => {
            this.setState({messages: messagesInfo});
    });
    };

    render() {
        const {navigation} = this.props;
        return (
            <View>
                { this.state.messages.error === 'Unauthorized' ? <Button onPress={ () => navigation.navigate('Register')} title='Register'/>
                : this.state.messages.map((data, i) => <Text key={i}>{data.message}</Text>)}
            </View>
        );
    };
};

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
    },
});
