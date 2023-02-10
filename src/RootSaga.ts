import { all, fork } from 'redux-saga/effects';


const sagas = {};

export default function* RootSaga() {
  yield all(Object.values(sagas).map((saga) => fork(saga)));
}
