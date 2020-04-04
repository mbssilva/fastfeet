import { all } from 'redux-saga/effects';

import session from './session/sagas';

export default function* rootSaga() {
  return yield all([session]);
}
