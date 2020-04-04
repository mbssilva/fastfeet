import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persisted = persistReducer(
    {
      key: 'fastfeet',
      storage,
      whitelist: ['session'],
    },
    reducers
  );

  return persisted;
};
