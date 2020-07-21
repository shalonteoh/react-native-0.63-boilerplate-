import React, { Component } from "react";
import { View, Text } from "react-native";
import { Helpers } from 'App/Theme';
import styles from './indexStyle';

export default class AddScreen extends Component {
    render() {
        return (
            <View style={[Helpers.fill, styles.container]}>
                <View>
                    <Text>This is add screen</Text>
                </View>
            </View>
        )
    }
}