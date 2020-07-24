/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { TrackItemTypes } from './Actions'

export const getItemsLoading = (state) => ({
    ...state,
    getItemsLoading: true,
    getItemsErrorMessage: null,
})

export const getItemsSuccess = (state, { items }) => ({
    ...state,
    items: items,
    getItemsLoading: false,
    getItemsErrorMessage: null,
})

export const getItemsFailure = (state, { errorMessage }) => ({
    ...state,
    items: [],
    getItemsLoading: false,
    getItemsErrorMessage: errorMessage,
})

export const updateItemsSuccess = (state, { items }) => ({
    ...state,
    items: items,
    getItemsLoading: false,
    getItemsErrorMessage: null,
})

export const addItemSuccess = (state, { item }) => ({
    ...state,
    items: [...state.items, item],
    getItemsLoading: false,
    getItemsErrorMessage: null,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
// map our action types to our reducer functions
export const reducer = createReducer(INITIAL_STATE, {
    [TrackItemTypes.GET_ITEMS_LOADING]: getItemsLoading,
    [TrackItemTypes.GET_ITEMS_SUCCESS]: getItemsSuccess,
    [TrackItemTypes.GET_ITEMS_FAILURE]: getItemsFailure,
    [TrackItemTypes.UPDATE_ITEMS_SUCCESS]: updateItemsSuccess,
    [TrackItemTypes.ADD_ITEM_SUCCESS]: addItemSuccess,
})