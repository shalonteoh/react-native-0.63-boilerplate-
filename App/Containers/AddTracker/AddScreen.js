import React, { Component } from "react";
import { View, Text } from "react-native";
import { Helpers, Metrics, Colors, ApplicationStyles, Fonts } from 'App/Theme';
import styles from './indexStyle';
import {
    Form,
    Item,
    Picker
} from 'native-base';
import CTextInput from "../../Components/TextInput";
import CPicker from "../../Components/Picker";

const TYPES = [
    {
        label: 'Increment',
        value: 1
    },
    {
        label: 'Decrement',
        value: 2
    },
    {
        label: 'Rate',
        value: 3
    }
]

export default class AddScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined
        };
    }

    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }
    render() {
        return (
            <View style={[
                Helpers.fill,
                Metrics.verticalPadding,
                styles.container]}>
                <Form
                    style={[
                        Metrics.horizontalMargin,
                        Metrics.verticalMargin,
                    ]}>
                    <CTextInput
                        title="Title" />
                    <CPicker
                        title="Type"
                        items={TYPES}
                        placeholder="Select type"
                        value={this.state.selected2}
                        onValueChange={this.onValueChange2.bind(this)} />
                </Form>
            </View>
        )
    }
}