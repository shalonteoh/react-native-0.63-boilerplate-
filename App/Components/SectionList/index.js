import React, { Component } from "react"
import { View, Text } from "react-native"
import { Fonts, Metrics, Colors } from 'App/Theme'
import styles from './indexStyle'
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
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
                                Metrics.horizontalMargin,
                                Metrics.verticalMargin,
                            ]}>
                            <Text style={[Fonts.normal]}>{v.title}</Text>
                            <View style={[
                                Metrics.tinyTopMargin,
                                Metrics.smallHorizontalPadding,
                                Metrics.tinyBorderRadius,
                                { backgroundColor: Colors.gray }]}>
                                {v.data.map((v, i) => (
                                    <View
                                        key={i}>
                                        {v.data && v.type === 1 && (
                                            <View style={[styles.item]}>
                                                <Text style={[Fonts.normal]}>{v.title}</Text>
                                                <Text style={[Fonts.small]}>{v.data}</Text>
                                            </View>
                                        )}
                                        {v.data && v.type === 2 && (
                                            <TouchableOpacity
                                                style={[styles.item]}
                                                onPress={v.data}
                                            >
                                                <Text style={[Fonts.normal]}>{v.title}</Text>
                                                <Icon name="chevron-right" size={15} color={Colors.black} />
                                            </TouchableOpacity>
                                        )}
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
            </View >
        )
    }
}