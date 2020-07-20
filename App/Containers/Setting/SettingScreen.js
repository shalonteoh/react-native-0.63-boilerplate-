import React, { Component } from "react"
import { View } from "react-native"
import { Helpers, Metrics } from 'App/Theme'
import styles from './indexStyle'
import { getVersion, getBuildNumber } from 'react-native-device-info'
import CSectionList from "App/Components/SectionList"

const DATA = [
    {
        title: "About",
        data: [
            {
                title: "App Version",
                data: `${getVersion()} (${getBuildNumber()})`
            },
            {
                title: "Feedback Email",
                data: 'example@test.com'
            }
        ]
    },
];

export default class SettingScreen extends Component {
    render() {
        return (
            <View style={[Helpers.fill, styles.container]}>
                <View style={[Metrics.verticalMargin]}>
                    <CSectionList
                        data={DATA} />
                </View>
            </View>
        )
    }
}