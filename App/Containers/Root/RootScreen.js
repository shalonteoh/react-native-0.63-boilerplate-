import React, { Component } from 'react'
import NavigationService from 'App/Services/NavigationService'
import { View } from 'react-native'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { PropTypes } from 'prop-types'
import { Helpers } from 'App/Theme'
import DrawerNavigator from 'App/Navigators/DrawerNavigator'
import AuthScreen from '../Auth/AuthScreen'
// import AppNavigator from 'App/Navigators/StackNavigator'
// import TabNavigator from 'App/Navigators/TabNavigator'

class RootScreen extends Component {
    componentDidMount() {
        // Run the startup saga when the application is starting
        this.props.startup()
    }

    render() {
        const { user } = this.props;
        return (
            <View style={Helpers.fill}>
                {user ? (
                    <DrawerNavigator
                        // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
                        ref={(navigatorRef) => {
                            NavigationService.setTopLevelNavigator(navigatorRef)
                        }}
                    />
                ) : <AuthScreen />}

            </View>
        )
    }
}

RootScreen.propTypes = {
    startup: PropTypes.func,
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
})

const mapDispatchToProps = (dispatch) => ({
    startup: () => dispatch(StartupActions.startup()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RootScreen)