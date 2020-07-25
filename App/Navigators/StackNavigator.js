import React from 'react';
import { TouchableOpacity } from 'react-native';
import HomeScreen from "../Containers/Home/HomeScreen";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from "react-navigation-stack"
export default createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
            title: '',
            animationEnabled: false,
            transitionConfig: () => ({
                transitionSpec: {
                    duration: 0,
                    timing: 0,
                },
            }),
            headerLeft: () => (
                <TouchableOpacity
                    onPress={navigation.toggleDrawer}
                    style={{ paddingLeft: 10 }}
                >
                    <Icon name="bars" size={20} color="#000" />
                </TouchableOpacity>)
        }),
    },
}, {
    initialRouteName: 'HomeScreen'
});