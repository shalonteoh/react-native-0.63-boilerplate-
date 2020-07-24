import React from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from "react-navigation-stack"
import AddScreen from '../Containers/AddTracker/AddScreen';
import { Colors, Helpers, Fonts, Metrics } from 'App/Theme';

export default createStackNavigator({
    AddScreen: {
        screen: AddScreen,
        navigationOptions: ({ navigation }) => ({
            title: '',
            headerLeft: (
                <TouchableOpacity
                    onPress={() => navigation.state.params !== undefined && navigation.state.params.promptDiscard ?
                        Alert.alert(
                            'Discard changes?',
                            'You have unsaved changes. Are you sure to discard them and leave the screen?',
                            [
                                { text: "Don't leave", style: 'cancel', onPress: () => { } },
                                {
                                    text: 'Discard',
                                    style: 'destructive',
                                    // If the user confirmed, then we dispatch the action we blocked earlier
                                    // This will continue the action that had triggered the removal of the screen
                                    onPress: () => navigation.goBack(null),
                                },
                            ]
                        ) : navigation.goBack(null)
                    }
                >
                    <View style={[
                        Helpers.row,
                        Metrics.smallLeftMargin
                    ]}>
                        <Icon name="chevron-left" size={20} color={Colors.activeTint} />
                        <Text style={[
                            Fonts.normal,
                            Metrics.smallLeftMargin,
                            { color: Colors.activeTint }]}
                        >Discard</Text>
                    </View>
                </TouchableOpacity>)
        }),
    },
}, {
    initialRouteName: 'AddScreen'
});