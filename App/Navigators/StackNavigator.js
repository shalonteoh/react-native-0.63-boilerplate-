import React from 'react';
import { Button } from 'react-native';
import HomeScreen from "../Containers/Home/HomeScreen";
const { createStackNavigator } = require("react-navigation-stack");
export default createStackNavigator({
    HomeScreen: {
        name: 'HomeScreen',
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            animationEnabled: false,
            transitionConfig: () => ({
                transitionSpec: {
                    duration: 0,
                    timing: 0,
                },
            }),
            headerLeft: (
                <Button
                    onPress={navigation.toggleDrawer}
                    title="Drawer"
                    color="#222"
                />)
        }),
    }
}, {
    initialRouteName: 'HomeScreen'
});