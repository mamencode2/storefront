import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSliceReducer from './slices/cartSlice';
//import cartSliceReducer from './slices/cartSlice'
//import favItemReducer from './slices/favItemSclice'
import favItemReducer from './slices/favItemSlice';

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['nonPersistableState'],
  };
  const rootReducer = combineReducers({
    cart: cartSliceReducer,
    favItem:favItemReducer
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });
  export const persistor = persistStore(store);


