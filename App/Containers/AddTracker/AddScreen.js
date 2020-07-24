import React, { Component } from "react";
import { View, Text } from "react-native";
import { Helpers, Metrics, Colors } from 'App/Theme';
import styles from './indexStyle';
import {
    Form,
} from 'native-base';
import CTextInput from "../../Components/TextInput";
import CPicker from "../../Components/Picker";
import BottomButton from "../../Components/BottomButton";

const TYPES = [
    {
        label: 'Plus/Minus',
        value: 1
    },
    {
        label: 'Average',
        value: 2
    },
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

    onCreate() {
        console.log('on create');
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
                <BottomButton
                    itemId={null}
                    onPress={this.onCreate}
                    backgroundColor={Colors.activeTint}
                    textColor={Colors.white}
                    value="Create" />
            </View>
        )
    }
}