import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'fastfeetapp',
      storage: AsyncStorage,
      whitelist: ['login', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
