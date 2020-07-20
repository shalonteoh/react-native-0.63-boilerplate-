import { createAppContainer } from "react-navigation";
import HomeScreen from "../Containers/Home/HomeScreen";
const { createStackNavigator } = require("react-navigation-stack");

const StackNavigator = createStackNavigator({
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
            })
        }),
    },

}, {
    initialRouteName: 'HomeScreen'
})

export default createAppContainer(StackNavigator)