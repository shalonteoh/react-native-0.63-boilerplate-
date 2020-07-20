import { createDrawerNavigator } from 'react-navigation-drawer';
import StackNavigator from './StackNavigator';

export default createDrawerNavigator({
    Home: {
        name: 'Home',
        screen: StackNavigator,
        navigationOptions: ({ navigation }) => ({
            drawerLabel: 'Home',
        }),
    }
},
    {
        initialRouteName: 'Home',
    });