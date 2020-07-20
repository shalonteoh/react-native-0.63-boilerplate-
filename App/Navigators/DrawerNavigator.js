import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import TabNavigator from './TabNavigator';
import Icon from 'react-native-vector-icons/FontAwesome';

const DrawerNavigator = createDrawerNavigator({
    Home: {
        screen: TabNavigator,
        navigationOptions: ({ navigation }) => ({
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon name="home" size={20} color={tintColor} />
            ),
        }),
    }
}, {
    contentOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        itemsContainerStyle: {
            marginVertical: 30,
        },
    }
});


export default createAppContainer(DrawerNavigator)
