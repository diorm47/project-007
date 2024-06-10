import { applyMiddleware, combineReducers, createStore } from "redux";

import { thunk } from "redux-thunk";
import userReducer from "./user-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import gridsReducer from "./grids-reducer";
import usersReducer from "./users-reducer";

const rootReducer = combineReducers({
  user: userReducer,
  grids: gridsReducer,
  users: usersReducer,
});

const middleware = [thunk];

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middleware)
);
export const persistor = persistStore(store);
