import React, { Component } from "react"
import { View, Text } from "react-native"
import { Fonts, Metrics, Helpers, ApplicationStyles } from 'App/Theme'
import {
    Item,
    Input,
    Icon
} from 'native-base';
import styles from './indexStyle'
export default class CTextInput extends Component {
    render() {
        const { title, onValueChange, error } = this.props;
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
                        ]}
                        error={error}>
                        <Input
                            onChangeText={onValueChange.bind(this)}
                            clearButtonMode='while-editing'
                        />
                    </Item>
                </View>
            </View>
        )
    }
}
