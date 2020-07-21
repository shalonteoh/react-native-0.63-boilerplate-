# react-native-0.63-boilerplate

## Setup

- run `npm install` to install dependancies
- run `cd ios && pod install && cd ..` to install pods
- run `npx react-native run-ios` to launch simulator and app

## Dependancies

```
    "react": "16.13.1"
    "react-native": "0.63.1"
```

### Redux

Usage of redux to let component read data from Redux store and dispatch actions to store to update data

```
    "redux": "^4.0.5"
    "react-redux": "^7.2.0"
```

Usage of react persist to save the Redux Store when the app is closed or refreshed. Meanwhile async storage is an asynchronous, unencrypted, persistent, key-value storage system for React Native.

```
    "redux-persist": "^6.0.0"
    "@react-native-community/async-storage": "^1.11.0"
```

Usage of redux saga as redux middleware, which means this thread can be started, paused and cancelled from the main application with normal redux actions (asynchronous)

```
    "redux-saga": "^1.1.3"
```

Usage of redux sauce:

1. _createReducer_ - becomes much more readable, testable, and manageable when your reducers start to grow in complexity or volume.
2. _createActions_ - to build object which contains Types and Creators

```
    "reduxsauce": "^1.1.3"
```

### Navigation

Here are building blocks and shared foundations for navigators (to create the navigation structure in your app)

```
    "react-navigation": "^4.4.0"
    "@react-native-community/masked-view": "^0.1.10"
    "react-native-gesture-handler": "^1.6.1"
    "react-native-safe-area-context": "^3.1.1"
    "react-native-screens": "^2.9.0"
    "react-native-reanimated": "^1.9.0"
```

Usage of stack type navigation to manages our navigation tree and contains the navigation state

```
    "react-navigation-stack": "^2.8.2"
```

Usage of tab type navigation (most common style of navigation in mobile apps)

```
    "react-navigation-tabs": "^2.9.0",
```

Usage of drawer type navigation

```
    "react-navigation-drawer": "^2.5.0",
```

Use lottie for splash logo animation etc...

```
    "lottie-ios": "^3.1.3"
    "lottie-react-native": "^3.4.0"
```

Authentication tools:

1. Google login (update GoogleService-Info.plist [follow this guide](https://github.com/react-native-community/google-signin/blob/master/docs/get-config-file.md)

```
"@react-native-community/google-signin": "^4.0.3"
```
