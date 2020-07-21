import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StackNavigator from "./StackNavigator";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'App/Theme';
import AddTrackNavigator from './AddTrackNavigator';
import HistoryNavigator from './HistoryNavigator';

export default createBottomTabNavigator({
    Home: {
        screen: StackNavigator,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" size={20} color={tintColor} />
            ),
        }),
    },
    Add: {
        screen: AddTrackNavigator,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon name="plus" size={20} color={tintColor} />
            ),
        }),
    },
    History: {
        screen: HistoryNavigator,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon name="line-chart" size={20} color={tintColor} />
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