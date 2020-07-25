import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StackNavigator from "./StackNavigator";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'App/Theme';
import HistoryNavigator from './HistoryNavigator';
import PlaceholderScreen from '../Containers/AddTracker/PlaceholderScreen';

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
        screen: PlaceholderScreen,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => (
                <Icon name="plus" size={20} color={tintColor} />
            ),
            tabBarOnPress: ({ navigation, defaultHandler }) => {
                navigation.navigate('AddScreen');
            },
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
    initialRouteName: 'History',
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarOptions: {
            activeTintColor: Colors.activeTint,
            inactiveTintColor: Colors.inactiveTint,
        },
    })
});