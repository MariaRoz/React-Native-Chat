import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from "./components/LoginScreen";
import ChatScreen from "./components/ChatScreen"
import RegisterScreen from "./components/RegisterScreen";


const AppNavigation = createStackNavigator({
    Chat: { screen: ChatScreen, navigationOptions: { title: 'Chat', headerLeft: null }},
    Login: { screen: LoginScreen, navigationOptions: { title: 'Login', headerLeft: null }} ,
    Register: { screen: RegisterScreen, navigationOptions: { title: 'Register', headerLeft: null }},
},
    {
        initialRouteName: 'Chat'
    });

const AppContainer = createAppContainer(AppNavigation);

export default AppContainer;



