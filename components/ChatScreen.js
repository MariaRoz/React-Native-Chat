import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ChatScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        return (
            <View>
                <View style={styles.header}>
                    <Button onPress={ () => navigation.navigate('Register')} title='Register'/>
                </View>
                <Text>Chat page!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        alignSelf: 'stretch',
    },
});
