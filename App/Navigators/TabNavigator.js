import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import DrawerNavigator from "./DrawerNavigator";

const TabNavigator = createBottomTabNavigator({
    HomeScreen: DrawerNavigator
});

export default createAppContainer(TabNavigator)