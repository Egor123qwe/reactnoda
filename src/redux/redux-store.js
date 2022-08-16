import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import DialogReducer from './DialogReducer';
import ProfileReducer from './ProfileReducer';
import UsersReducer from './UsersReducer';
import AuthReducer from './AuthReducer';
import thunk from 'redux-thunk';
import AppReducer from './AppReducer';
import UrlReducer from './UrlReducer';

let reducers = combineReducers({
    ProfilePage: ProfileReducer,
    DialogPage: DialogReducer,
    UsersPage: UsersReducer,
    Auth: AuthReducer,
    App: AppReducer,
    Url: UrlReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;