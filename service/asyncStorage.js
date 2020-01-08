import { AsyncStorage } from "react-native";

async function getToken() {
    return AsyncStorage.getItem('token');
}

async function setToken(token) {
   await AsyncStorage.setItem('token', token);
}

async function clearAsyncStorage() {
    await AsyncStorage.clear();
}

export { getToken, setToken, clearAsyncStorage }
