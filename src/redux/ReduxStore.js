import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sitebarReducer from "./SitebarReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sitebar: sitebarReducer
});

let store = createStore(reducers);





export default store;