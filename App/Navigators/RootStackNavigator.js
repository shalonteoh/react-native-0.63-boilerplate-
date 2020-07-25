import React from 'react';
import { TouchableOpacity } from 'react-native';
import HomeScreen from "../Containers/Home/HomeScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import AddTrackNavigator from './AddTrackNavigator';

const RootStackNavigator = createStackNavigator({
    Drawer: {
        screen: DrawerNavigator,
        navigationOptions: ({ navigation }) => ({
            animationEnabled: false,
        })
    },
    AddScreen: {
        name: 'AddScreen',
        screen: AddTrackNavigator,
        navigationOptions: ({ navigation }) => ({
            animationEnabled: true,
        })
    }
}, {
    initialRouteName: 'Drawer',
    headerMode: 'none',
    mode: 'modal',
});

export default createAppContainer(RootStackNavigator)