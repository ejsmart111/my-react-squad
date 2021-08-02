// import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import playersReducer from "./playersReducer";
import playersModalReducer from "./playersModalReducer";
import squadReducer from "./squadReducer";

const rootReducer = combineReducers({
    // firebase: firebaseReducer,
    players: playersReducer,
    modal: playersModalReducer,
    squad: squadReducer
})

export default rootReducer