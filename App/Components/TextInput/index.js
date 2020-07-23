import React, { Component } from "react"
import { View, Text } from "react-native"
import { Fonts, Metrics, Helpers, ApplicationStyles } from 'App/Theme'
import {
    Item,
    Input,
} from 'native-base';
import styles from './indexStyle'
export default class CTextInput extends Component {
    render() {
        const { title } = this.props;
        return (
            <View style={[
                Helpers.row,
                ApplicationStyles.item,
                Metrics.smallBottomMargin,
            ]}>
                <View style={{ flex: 1 }}>
                    <Text style={[
                        Fonts.normal
                    ]}>{title}</Text>
                </View>
                <View style={{ flex: 5 }}>
                    <Item
                        regular
                        style={[
                            Metrics.tinyBorderRadius,
                        ]}>
                        <Input />
                    </Item>
                </View>
            </View>
        )
    }
}
