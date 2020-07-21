/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

export const storeUserLoading = (state) => ({
    ...state,
    userIsLoading: true,
    userErrorMessage: null,
})

export const storeUserSuccess = (state, { user }) => ({
    ...state,
    user: user,
    userIsLoading: false,
    userErrorMessage: null,
})

export const storeUserFailure = (state, { errorMessage }) => ({
    ...state,
    user: null,
    userIsLoading: false,
    userErrorMessage: errorMessage,
})

export const removeUserSuccess = (state) => ({
    ...state,
    user: null,
    userIsLoading: false,
    userErrorMessage: null,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
// map our action types to our reducer functions
export const reducer = createReducer(INITIAL_STATE, {
    [AuthTypes.STORE_USER_LOADING]: storeUserLoading,
    [AuthTypes.STORE_USER_SUCCESS]: storeUserSuccess,
    [AuthTypes.STORE_USER_FAILURE]: storeUserFailure,
    [AuthTypes.REMOVE_USER_SUCCESS]: removeUserSuccess,
})