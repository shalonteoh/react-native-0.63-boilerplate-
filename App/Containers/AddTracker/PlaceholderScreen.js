import React, { Component } from "react";
import { View, Text } from "react-native";
import { Colors } from 'App/Theme';

export default class PlaceholderScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.transparent }} />
        )
    }
}