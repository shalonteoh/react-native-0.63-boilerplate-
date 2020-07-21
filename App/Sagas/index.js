import { takeLatest, all, takeEvery } from 'redux-saga/effects'
import { AuthTypes } from 'App/Stores/Auth/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { startup } from './StartupSaga'
import { storeUser, removeUser } from "./AuthSaga"
export default function* root() {
    yield all([
        /**
         * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
         */
        // Run the startup saga when the application starts
        takeLatest(StartupTypes.STARTUP, startup),
        // Call `fetchUser()` when a `FETCH_USER` action is triggered
        takeEvery(AuthTypes.STORE_USER, storeUser),
        takeEvery(AuthTypes.REMOVE_USER, removeUser),
    ])
}