export function openOrderVisualizeContainer(order) {
  return {
    type: '@application/OPEN_ORDER_VISUALIZE',
    payload: {
      order,
    },
  };
}

export function closeOrderVisualizeContainer() {
  return {
    type: '@application/CLOSE_ORDER_VISUALIZE',
  };
}

export function openProblemVisualizeContainer(problem) {
  return {
    type: '@application/OPEN_PROBLEM_VISUALIZE',
    payload: {
      problem,
    },
  };
}

export function closeProblemVisualizeContainer() {
  return {
    type: '@application/CLOSE_PROBLEM_VISUALIZE',
  };
}

export function openEditRecipientPage(recipient) {
  return {
    type: '@application/OPEN_EDIT_RECIPIENT_PAGE',
    payload: {
      recipient,
    },
  };
}

export function closeEditRecipientPage() {
  return {
    type: '@application/CLOSE_EDIT_RECIPIENT_PAGE',
  };
}

export function openEditOrderPage(order) {
  return {
    type: '@application/OPEN_EDIT_ORDER_PAGE',
    payload: {
      order,
    },
  };
}

export function closeEditOrderPage() {
  return {
    type: '@application/CLOSE_EDIT_ORDER_PAGE',
  };
}

export function openEditDelivererPage(deliverer) {
  return {
    type: '@application/OPEN_EDIT_DELIVERER_PAGE',
    payload: {
      deliverer,
    },
  };
}

export function closeEditDelivererPage() {
  return {
    type: '@application/CLOSE_EDIT_DELIVERER_PAGE',
  };
}
