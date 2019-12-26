import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from "./components/LoginScreen";
import ChatScreen from "./components/ChatScreen"
import RegisterScreen from "./components/RegisterScreen";

const AppNavigation = createStackNavigator({
    Chat: ChatScreen,
    Login: LoginScreen,
    Register: RegisterScreen
},
    {
        initialRouteName: 'Chat'
    });

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;



