import { put } from 'redux-saga/effects'
import { TrackItemTypes } from 'App/Stores/TrackItem/Actions'
import NavigationService from 'App/Services/NavigationService'

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */

export function* updateItems({ items }) {
    yield put({
        type: TrackItemTypes.UPDATE_ITEMS_SUCCESS,
        items
    });
}

export function* addItem({ item }) {
    yield put({
        type: TrackItemTypes.ADD_ITEM_SUCCESS,
        item: {
            id: Math.random().toString(12).substring(7),
            title: item.title,
            data: {
                date: 'Today',
                value: 0,
            }
        }
    });
    NavigationService.navigate('Home')
}
