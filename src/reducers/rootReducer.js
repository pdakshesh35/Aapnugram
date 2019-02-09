import LoginReducer from './loginReducer'
import UserReducer from './usersReducer'
import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

const RootReducer = combineReducers({
    login: LoginReducer,
    user: UserReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default RootReducer