import { combineReducers } from "redux";
import { signUp, userReducer, location, role} from "./userReducer";

const reducers = combineReducers({
    User: signUp,
    Avatar:userReducer,
    Location:location,
    Role: role
})

export default reducers;