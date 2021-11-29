import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// Redux Dev Tools
import { composeWithDevTools } from "redux-devtools-extension";

// Redux Persist
import { persistStore } from "redux-persist";

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store);
export { persistor, store };
