import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'

/**
 * This import defaults to localStorage for web and AsyncStorage for react-native.
 *
 * Keep in mind this storage *is not secure*. Do not use it to store sensitive information
 * (like API tokens, private and sensitive data, etc.).
 *
 * If you need to store sensitive information, use redux-persist-sensitive-storage.
 * @see https://github.com/CodingZeal/redux-persist-sensitive-storage
 */
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    // whitelist: [
    //     'auth',
    // ],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [
        // 'auth',
    ],
}

export default (rootReducer, rootSaga) => {
    const middleware = []
    const enhancers = []

    // Create the saga middleware
    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware)
    enhancers.push(applyMiddleware(...middleware))

    // Middleware: Redux Persist Persisted Reducer
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    // Redux: Store
    // Connect the sagas to the redux store
    const store = createStore(persistedReducer, compose(...enhancers))

    // Middleware: Redux Persist Persister
    const persistor = persistStore(store)

    // Kick off the root saga
    sagaMiddleware.run(rootSaga)

    // Exports
    return { store, persistor }
}