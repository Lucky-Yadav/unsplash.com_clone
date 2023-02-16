import { legacy_createStore as createStore } from "redux";
import { AuthReducer } from "./reducer";

export const store = createStore(AuthReducer);
