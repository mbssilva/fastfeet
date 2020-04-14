export function LoginRequest(id) {
  return {
    type: '@login/LOGIN_REQUEST',
    payload: {
      id,
    },
  };
}

export function LoginSuccess(id, name, email, avatar_id, createdAt) {
  return {
    type: '@login/LOGIN_SUCCESS',
    payload: {
      id,
      name,
      email,
      avatar_id,
      createdAt,
    },
  };
}

export function LoginFailure() {
  return {
    type: '@login/LOGIN_FAILURE',
  };
}

export function Logout() {
  return {
    type: '@login/LOGOUT',
  };
}
