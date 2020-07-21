import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from "react-navigation-stack"
import AddScreen from '../Containers/AddTracker/AddScreen';
export default createStackNavigator({
    AddScreen: {
        screen: AddScreen,
        navigationOptions: ({ navigation }) => ({
            title: '',
            animationEnabled: false,
            transitionConfig: () => ({
                transitionSpec: {
                    duration: 0,
                    timing: 0,
                },
            }),
            headerLeft: (
                <TouchableOpacity
                    onPress={navigation.toggleDrawer}
                    style={{ paddingLeft: 10 }}
                >
                    <Icon name="bars" size={20} color="#000" />
                </TouchableOpacity>)
        }),
    },
}, {
    initialRouteName: 'AddScreen'
});