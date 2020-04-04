import { put, call, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../config/history';

import { createSessionSuccess, createSessionFailure } from './actions';

export function* createSession({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/sessions', { email, password });

    const { user, token } = response.data;

    yield put(createSessionSuccess(user, token));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    history.push('/dashboard');
  } catch (err) {
    toast.error('Verifique seu Login e Senha!');
    yield put(createSessionFailure());
  }
}

export default all([
  takeLatest('@session/CREATE_SESSION_REQUEST', createSession),
]);
