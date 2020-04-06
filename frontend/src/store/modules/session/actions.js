export function createSessionRequest(email, password) {
  return {
    type: '@session/CREATE_SESSION_REQUEST',
    payload: { email, password },
  };
}

export function createSessionSuccess(user, token) {
  return {
    type: '@session/CREATE_SESSION_SUCCESS',
    payload: { user, token },
  };
}

export function createSessionFailure() {
  return {
    type: '@session/CREATE_SESSION_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@session/SIGN_OUT',
  };
}
