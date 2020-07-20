import React, { Component } from "react";
import { View, Text } from "react-native";
import { Helpers, Images } from 'App/Theme';
import styles from './indexStyle';
import LottieView from 'lottie-react-native';
export default class SplashScreen extends Component {
    render() {
        return (
            <View style={[Helpers.fillRowCenter, styles.container]}>
                <View style={[Helpers.center, styles.logo]}>
                    <LottieView source={Images.splash} autoPlay loop />
                </View>
            </View>
        )
    }
}