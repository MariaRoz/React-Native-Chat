import { AsyncStorage } from "react-native";

const getToken = async () => {
    return AsyncStorage.getItem('token');
};

const setToken = async (token) => {
   await AsyncStorage.setItem('token', token);
};

const clearAsyncStorage = async() => {
    await AsyncStorage.clear();
};

export { getToken, setToken, clearAsyncStorage }
