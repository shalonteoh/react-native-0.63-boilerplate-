import React, { Component } from "react";
import { View, Text, Modal } from "react-native";
import { Helpers, Metrics, Colors } from 'App/Theme';
import styles from './indexStyle';
import Icon from "react-native-vector-icons/FontAwesome";

export default class AddScreen extends Component {
    render() {
        return (
            <View style={[
                Helpers.fill,
                styles.container]}>
                <Text>This is add screen</Text>
            </View>
        )
    }
}