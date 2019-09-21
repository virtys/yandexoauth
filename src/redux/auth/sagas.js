import { call, put, takeLatest, all } from 'redux-saga/effects'
import { auth } from './routines'
import authApi from '../../api'

function* authorization(action) {
  try {
    yield put(auth.request())
    yield call(authApi.getTokens, action.payload)
    yield put(auth.success())
  } catch (error) {
    yield put(auth.failure(error.response))
  }
}

function* onAuth() {
  yield takeLatest(auth.TRIGGER, authorization)
}

export default function* authSagas() {
  yield all([call(onAuth)])
}
