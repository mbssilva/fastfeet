import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@login/LOGIN_SUCCESS':
      return produce(state, (draft) => {
        draft.profile = action.payload;
      });

    case '@login/LOGOUT':
      return produce(state, (draft) => {
        draft.profile = null;
      });

    default:
      return state;
  }
}
