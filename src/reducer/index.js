import {combineReducers} from "redux";
import postReducer from "./postReducer";
import usersReduces from "./usersReduces";

export default combineReducers({
   posts : postReducer,
   users : usersReduces
});