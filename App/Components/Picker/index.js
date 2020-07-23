import React, { Component } from "react"
import { View, Text } from "react-native"
import { Fonts, Metrics, Helpers, ApplicationStyles, Colors } from 'App/Theme'
import {
    Item,
    Picker,
} from 'native-base';
import styles from './indexStyle'
import Icon from "react-native-vector-icons/FontAwesome";

export default class CPicker extends Component {

    render() {
        const { title, items, placeholder, onValueChange, value } = this.props;
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
                        picker
                        regular
                        style={[
                            Metrics.tinyBorderRadius,
                        ]}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon
                                name="chevron-down"
                                size={20}
                                style={{ width: '10%' }} />}
                            style={[{
                                height: 50,
                            }
                            ]}
                            placeholder={placeholder}
                            placeholderStyle={{
                                color: Colors.darkGray,
                            }}
                            textStyle={{
                                width: '90%'
                            }}
                            placeholderIconColor="#007aff"
                            selectedValue={value}
                            onValueChange={onValueChange.bind(this)}
                        >
                            {items.map((v, i) => (
                                <Picker.Item
                                    key={i}
                                    label={v.label}
                                    value={v.value} />
                            ))}
                        </Picker>
                    </Item>
                </View>

            </View>
        )
    }
}
