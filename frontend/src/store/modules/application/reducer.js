import produce from 'immer';

const INITIAL_STATE = {
  orderVisualizeContainerOpened: false,
  order: null,
};

export default function application(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@application/OPEN_CONTAINER':
      return produce(state, (draft) => {
        const { order } = action.payload;
        draft.orderVisualizeContainerOpened = true;
        draft.order = order;
      });

    case '@application/CLOSE_CONTAINER':
      return produce(state, (draft) => {
        draft.orderVisualizeContainerOpened = false;
        draft.order = null;
      });

    default:
      return state;
  }
}
