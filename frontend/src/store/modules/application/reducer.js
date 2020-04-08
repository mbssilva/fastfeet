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
  editRecipientPage: {
    editRecipientPageOpened: false,
    recipient: null,
  },
  editOrderPage: {
    editOrderPageOpened: false,
    order: null,
  },
  editDelivererPage: {
    editDelivererPageOpened: false,
    deliverer: null,
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

    case '@application/OPEN_EDIT_RECIPIENT_PAGE':
      return produce(state, (draft) => {
        const { recipient } = action.payload;
        draft.editRecipientPage.editRecipientPageOpened = true;
        draft.editRecipientPage.recipient = recipient;
      });

    case '@application/CLOSE_EDIT_RECIPIENT_PAGE':
      return produce(state, (draft) => {
        draft.editRecipientPage.editRecipientPageOpened = false;
        draft.editRecipientPage.recipient = null;
      });

    case '@application/OPEN_EDIT_ORDER_PAGE':
      return produce(state, (draft) => {
        const { order } = action.payload;
        draft.editOrderPage.editOrderPageOpened = true;
        draft.editOrderPage.order = order;
      });

    case '@application/CLOSE_EDIT_ORDER_PAGE':
      return produce(state, (draft) => {
        draft.editOrderPage.editOrderPageOpened = false;
        draft.editOrderPage.order = null;
      });

    case '@application/OPEN_EDIT_DELIVERER_PAGE':
      return produce(state, (draft) => {
        const { deliverer } = action.payload;
        draft.editDelivererPage.editDelivererPageOpened = true;
        draft.editDelivererPage.deliverer = deliverer;
      });

    case '@application/CLOSE_EDIT_DELIVERER_PAGE':
      return produce(state, (draft) => {
        draft.editDelivererPage.editDelivererPageOpened = false;
        draft.editDelivererPage.deliverer = null;
      });

    default:
      return state;
  }
}
