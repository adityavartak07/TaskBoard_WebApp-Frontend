import { combineReducers } from "redux";

import tasks from "./tasks.js";
import auth from "./auth.js";

export const reducers = combineReducers({ tasks, auth });
