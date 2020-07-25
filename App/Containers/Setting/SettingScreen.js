import React, { Component } from "react"
import { View, Alert } from "react-native"
import { Helpers, Metrics } from 'App/Theme'
import styles from './indexStyle'
import { getVersion, getBuildNumber } from 'react-native-device-info'
import CSectionList from "App/Components/SectionList"
import { connect } from 'react-redux'
import Actions from 'App/Stores/Auth/Actions'
import { getTimeZone } from "react-native-localize"

const OTHER_SETTINGS = [
    {
        title: "About",
        data: [
            {
                title: "App Version",
                data: `${getVersion()} (${getBuildNumber()})`,
                type: 1
            },
            {
                title: "Timezone",
                data: getTimeZone(),
                type: 1
            },
            {
                title: "Feedback Email",
                data: 'example@test.com',
                type: 1
            }
        ]
    },
];

class SettingScreen extends Component {

    goToAuthScreen = () => {
        this.props.navigation.navigate('AuthScreen');
    }

    promptLogout = () => {
        Alert.alert(
            'Logout',
            'Are you confirm to logout?',
            [
                {
                    text: 'Cancel',
                    onPress: null,
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => this.props.removeUser()
                },
            ])
    }

    UNAUTH = [
        {
            title: "Account",
            data: [
                {
                    title: "Login / Sign Up",
                    type: 2, // Run function
                    data: this.goToAuthScreen
                }
            ]
        },
    ];

    AUTH = [
        {
            title: "Account",
            data: [
                {
                    title: "Logout",
                    type: 2, // Run function
                    data: this.promptLogout
                }
            ]
        }
    ];


    render() {
        const { user } = this.props;
        return (
            <View style={[Helpers.fill, styles.container]}>
                <View style={[Metrics.verticalMargin]}>
                    <CSectionList
                        data={user ?
                            [...this.AUTH, ...OTHER_SETTINGS] :
                            [...this.UNAUTH, ...OTHER_SETTINGS]} />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
    removeUser: () => dispatch(Actions.removeUser()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingScreen);