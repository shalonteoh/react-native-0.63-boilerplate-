import React, { Component } from 'react'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import createStore from 'App/Stores'
import RootScreen from './Containers/Root/RootScreen'
import SplashScreen from './Containers/Splash/SplashScreen'

const { store, persistor } = createStore()

export default class App extends Component {

  state = {
    gateLifted: false
  }

  onBeforeLift = () => {
    // Take an action before the gate lifts
    setTimeout(() => {
      this.setState({ gateLifted: true })
    }, 2000);
  }

  render() {
    LogBox.ignoreAllLogs();
    return (
      /**
       * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
       */
      // Provider makes the Redux store available to the rest of your app
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate persistor={persistor} onBeforeLift={this.onBeforeLift}>
          {this.state.gateLifted ? <RootScreen /> : <SplashScreen />}
        </PersistGate>
      </Provider>
    )
  }
}