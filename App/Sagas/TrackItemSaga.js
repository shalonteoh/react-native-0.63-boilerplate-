import { put } from 'redux-saga/effects'
import { TrackItemTypes } from 'App/Stores/TrackItem/Actions'
// import NavigationService from 'App/Services/NavigationService'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */

export function* updateItems({ items }) {
    yield put({
        type: TrackItemTypes.UPDATE_ITEMS_SUCCESS,
        items
    });
}
