import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { LoginSuccess, LoginFailure } from './actions';

function* Login({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.post, `/deliveryman/${id}`);

    const { name, email, avatar_id, createdAt } = response.data;

    yield put(LoginSuccess(id, name, email, avatar_id, createdAt));
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login! Verifique seus dados'
    );

    yield put(LoginFailure());
  }
}

export default all([takeLatest('@login/LOGIN_REQUEST', Login)]);
