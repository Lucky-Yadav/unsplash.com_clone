// import { legacy_createStore as createStore } from "redux";
import { AuthReducer } from "./reducer";

// export const store = createStore(AuthReducer);

import {  createStore } from "redux";

// const rootReducer = combineReducers({
//     auth: authReducer
// })

export const store = createStore(AuthReducer);
