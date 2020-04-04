import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function session(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@session/CREATE_SESSION_REQUEST':
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case '@session/CREATE_SESSION_SUCCESS':
      return produce(state, (draft) => {
        const { token } = action.payload;
        draft.token = token;
        draft.signed = true;
        draft.loading = false;
      });

    case '@session/CREATE_SESSION_FAILURE':
      return produce(state, (draft) => {
        draft.loading = false;
      });

    default:
      return state;
  }
}
