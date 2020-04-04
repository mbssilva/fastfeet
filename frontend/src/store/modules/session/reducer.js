import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
};

export default function session(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@session/CREATE_SESSION_SUCCESS':
      return produce(state, (draft) => {
        const { token } = action.payload;
        draft.token = token;
        draft.signed = true;
      });

    default:
      return state;
  }
}
