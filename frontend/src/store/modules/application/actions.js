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
