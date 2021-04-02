import { combineReducers } from "redux";

import login from "./Reducers/login";
import taskList from "./Reducers/taskList";
import statuses from "./Reducers/statuses";
import showStatus from "./Reducers/showStatus";

export default combineReducers({ login, taskList, statuses, showStatus });
