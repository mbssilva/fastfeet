export function openOrderVisualizeContainer(order) {
  return {
    type: '@application/OPEN_CONTAINER',
    payload: {
      order,
    },
  };
}

export function closeOrderVisualizeContainer() {
  return {
    type: '@application/CLOSE_CONTAINER',
  };
}
