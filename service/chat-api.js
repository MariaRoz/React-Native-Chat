import { AsyncStorage } from "react-native";

const getMessages = async() => {
    const token = await AsyncStorage.getItem('token');
    return fetch('http://localhost:3000/messages/', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        })
};

export {getMessages}

