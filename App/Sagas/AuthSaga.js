import { put } from 'redux-saga/effects'
import { AuthTypes } from 'App/Stores/Auth/Actions'
// import NavigationService from 'App/Services/NavigationService'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
export function* storeUser(user) {
    // Dispatch a redux action using `put()`
    // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
    yield put({
        type: AuthTypes.STORE_USER_SUCCESS,
        user
    })

    // Add more operations you need to do at startup here
    // ...
    // When those operations are finished we redirect to the main screen
    // NavigationService.navigateAndReset('HomeScreen')
}

export function* storeUserFailed(error) {
    yield put({
        type: AuthTypes.STORE_USER_FAILURE,
        errorMessage: error
    })
}

export function* removeUser() {
    yield put({ type: AuthTypes.REMOVE_USER_SUCCESS, })
}