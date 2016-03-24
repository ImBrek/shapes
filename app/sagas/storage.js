import {call, put, take, race, fork} from 'redux-saga/effects'
import {values} from 'lodash'

import {SHAPE} from 'actions/shape';

export function* watchForStorage (getState) {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
        for (var i=0, len = data.length; i < len; i++) {
            yield put({
                type: SHAPE.CREATE,
                payload: data[i]
            });
        }
    }
    while (true) {
        yield take([SHAPE.CREATE, SHAPE.DELETE]);
        const state = getState();
        const {entities:{shapes}} = state;
        localStorage.setItem('data', JSON.stringify(values(shapes)));

    }
}