import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from "react-navigation-stack"
import AddScreen from '../Containers/AddTracker/AddScreen';
import { Colors } from 'App/Theme';
export default createStackNavigator({
    AddScreen: {
        screen: AddScreen,
        navigationOptions: ({ navigation }) => ({
            title: '',
            headerLeft: null,
            headerRight: (
                <TouchableOpacity
                    onPress={() => navigation.goBack(null)}
                    style={{ paddingRight: 20 }}
                >
                    <Icon name="times" size={20} color={Colors.activeTint} />
                </TouchableOpacity>)
        }),
    },
}, {
    initialRouteName: 'AddScreen'
});