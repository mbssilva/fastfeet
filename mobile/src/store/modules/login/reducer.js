import produce from 'immer';

const INITIAL_STATE = {
  signed: true,
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@login/LOGIN_REQUEST':
      return produce(state, (draft) => {
        draft.signed = false;
        draft.loading = true;
      });

    case '@login/LOGIN_SUCCESS':
      return produce(state, (draft) => {
        draft.signed = true;
        draft.loading = false;
      });

    case '@login/LOGIN_FAILURE':
      return produce(state, (draft) => {
        draft.signed = false;
        draft.loading = false;
      });

    case '@login/LOGOUT':
      return produce(state, (draft) => {
        draft.signed = false;
        draft.loading = false;
      });

    default:
      return state;
  }
}
