import React, { Component } from "react";
import { View, Text } from "react-native";
import { Helpers } from 'App/Theme';
import styles from './indexStyle';
import { connect } from 'react-redux'
class HomeScreen extends Component {
    render() {
        console.log(this.props.user);
        return (
            <View style={[Helpers.fill, styles.container]}>
                <View>
                    <Text>This is home screen</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)