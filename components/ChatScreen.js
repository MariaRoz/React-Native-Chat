import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { getMessages } from "../service/chat-api";

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        getMessages().then(res => {
            this.setState({data: res})
    })
    }

    render() {
        const {navigation} = this.props;
        return (
            <View>
                <View style={styles.header}>
                    <Button onPress={ () => navigation.navigate('Register')} title='Register'/>
                </View>
                {this.state.data.map((res, i) => <Text key={i}>{res.message}</Text> )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
    },
});
