import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StackNavigator from "./StackNavigator";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'App/Theme';

export default createBottomTabNavigator({
    Home: {
        screen: StackNavigator,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={20} color={tintColor} />
            ),
        }),
    }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarOptions: {
            activeTintColor: Colors.activeTint,
            inactiveTintColor: Colors.inactiveTint,
        },
    })
});