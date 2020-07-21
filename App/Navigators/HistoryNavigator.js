import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from "react-navigation-stack"
import HistoryScreen from '../Containers/History/HistoryScreen';
export default createStackNavigator({
    HistoryScreen: {
        screen: HistoryScreen,
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
    initialRouteName: 'HistoryScreen'
});