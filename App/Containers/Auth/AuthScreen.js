import React, { Component } from "react"
import { View, Text } from "react-native"
import { connect } from "react-redux"
import { Helpers } from "App/Theme"
import styles from "./indexStyle"
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-community/google-signin'
import { googleClientId } from "../../../app.json"
import Actions from 'App/Stores/Auth/Actions'
import Toast from 'react-native-simple-toast'

GoogleSignin.configure({
    webClientId: googleClientId, // client ID of type WEB for your server (needed to verify user ID and offline access)
});
class AuthScreen extends Component {

    state = {
        isSigninInProgress: false
    }

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({
                isSigninInProgress: false,
            }, () => this.props.storeUser(userInfo));
        } catch (error) {
            this.setState({
                isSigninInProgress: false
            });
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                Toast.show('Google login service is not available or outdated');
            } else {
                // some other error happened
                Toast.show('Something went wrong');
            }
        }
    };
    render() {
        return (
            <View style={[Helpers.fillRowCenter, styles.container]}>
                <View style={[Helpers.center]}>
                    <GoogleSigninButton
                        style={{ width: 200, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this.signIn}
                        disabled={this.state.isSigninInProgress} />
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => ({
    user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
    storeUser: () => dispatch(Actions.storeUser()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthScreen);