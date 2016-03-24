import {fork} from 'redux-saga/effects'

import * as storage from './storage';


export default function* root (getState) {
    yield [
        fork(storage.watchForStorage,getState)
    ];
}