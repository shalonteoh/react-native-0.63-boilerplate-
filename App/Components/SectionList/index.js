import React, { Component } from "react"
import { View, Text } from "react-native"
import { Fonts, Metrics, Colors, Helpers } from 'App/Theme'
import styles from './indexStyle'
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
export default class CButton extends Component {
    render() {
        const { content, value, backgroundColor, onPress, itemId, borderColor, blr, brr } = this.props;
        return (
            <TouchableOpacity
                onPress={() => onPress(itemId)}
                style={[
                    Helpers.center,
                    {
                        backgroundColor: backgroundColor,
                        height: 50,
                        width: 50,
                        borderWidth: 1,
                        borderColor: borderColor || backgroundColor,
                        borderBottomLeftRadius: blr || 0,
                        borderBottomRightRadius: brr | 0,
                    },]}>
                {content || <Text>{value}</Text>}
            </TouchableOpacity>
        )
    }
}