import produce from 'immer';

const INITIAL_STATE = {
  orderVisualize: {
    orderVisualizeContainerOpened: false,
    order: null,
  },
  problemVisualize: {
    problemVisualizeContainerOpened: false,
    problem: null,
  },
};

export default function application(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@application/OPEN_ORDER_VISUALIZE':
      return produce(state, (draft) => {
        const { order } = action.payload;
        draft.orderVisualize.orderVisualizeContainerOpened = true;
        draft.orderVisualize.order = order;
      });

    case '@application/CLOSE_ORDER_VISUALIZE':
      return produce(state, (draft) => {
        draft.orderVisualize.orderVisualizeContainerOpened = false;
        draft.orderVisualize.order = null;
      });

    case '@application/OPEN_PROBLEM_VISUALIZE':
      return produce(state, (draft) => {
        const { problem } = action.payload;
        draft.problemVisualize.problemVisualizeContainerOpened = true;
        draft.problemVisualize.problem = problem;
      });

    case '@application/CLOSE_PROBLEM_VISUALIZE':
      return produce(state, (draft) => {
        draft.problemVisualize.problemVisualizeContainerOpened = false;
        draft.problemVisualize.problem = null;
      });

    default:
      return state;
  }
}
