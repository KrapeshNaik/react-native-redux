import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

export function * helloSaga() {
    console.log('hello');
}

// Our worker Saga: will perform the async task
export function * getAsyncAction() {
    yield delay(1000);
    yield put({
        type: 'INCREMENT'
    });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT
export function * watchAsyncAction() {
    yield takeEvery('INCREMENT', getAsyncAction);
}