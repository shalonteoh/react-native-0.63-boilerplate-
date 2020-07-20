import React, { Component } from "react"
import { View, Text } from "react-native"
import { Fonts, Metrics, Colors } from 'App/Theme'
import styles from './indexStyle'

export default class CSectionList extends Component {
    render() {
        const { data } = this.props;
        return (
            <View>
                {
                    data.map((v, i) => (
                        <View
                            key={i}
                            style={[
                                Metrics.horizontalMargin
                            ]}>
                            <Text style={[Fonts.normal]}>{v.title}</Text>
                            <View style={[
                                Metrics.tinyTopMargin,
                                Metrics.smallHorizontalPadding,
                                Metrics.tinyBorderRadius,
                                { backgroundColor: Colors.gray }]}>
                                {v.data.map((v, i) => (
                                    <View
                                        key={i}
                                        style={[styles.item]}>
                                        <Text style={[Fonts.normal]}>{v.title}</Text>
                                        <Text style={[Fonts.small]}>{v.data}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
            </View >
        )
    }
}