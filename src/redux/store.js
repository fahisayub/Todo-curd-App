import { legacy_createStore,combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer/reducer";
import { taskReducer } from "./taskReducer/reducer";

const rootReducer=combineReducers({
    authReducer:authReducer,
    taskReducer:taskReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));