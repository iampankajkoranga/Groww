
import dataReducer from '../reducers/dataReducer';
import dataTwoReducer from '../reducers/dataTwoReducer';
import dataThreeReducer from '../reducers/dataThreeReducer';
import sharesReducer from '../reducers/sharesReducer';
import { combineReducers, legacy_createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    dataReducer,
    dataTwoReducer,
    dataThreeReducer,
    sharesReducer

 
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;