import React, { Component } from "react";
import { View } from 'react-native';
import { Helpers } from 'App/Theme';
import CButton from 'App/Components/Button';
import {
    initialWindowMetrics,
} from 'react-native-safe-area-context';
export default class ButtomButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bottomSafe: 0
        };
    }
    componentDidMount() {
        this.setState({
            bottomSafe: initialWindowMetrics.insets.bottom
        })
    }
    render() {
        const { bottomSafe } = this.state;
        const { height } = this.props;
        return (
            <View style={[
                Helpers.fullWidth,
                Helpers.absoluteBottom
            ]}>
                <CButton {...this.props}
                    height={(height || 50) + (bottomSafe / 2)} />
            </View>
        )
    }
}