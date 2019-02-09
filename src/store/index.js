import {createStore, applyMiddleware, compose} from "redux";
import RootReducer from "../reducers/rootReducer";
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from "redux-firestore";
import {getFirebase} from "react-redux-firebase";
import firebaseConfig from '../config/firebaseConfig'
import {reactReduxFirebase} from 'react-redux-firebase'


export const store = createStore(RootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
    ));

