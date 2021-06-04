import {createStore, combineReducers, applyMiddleware} from 'redux';
import userReducer from './reducers/userReducer'
import projectReducer from './reducers/projectReducer'
import projectIdeaReducer from './reducers/projectIdeaReducer'
import userProjectReducer from './reducers/userProjectReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    user: userReducer,
    project: projectReducer,
    projectIdea: projectIdeaReducer,
    userProject: userProjectReducer
})

// const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store