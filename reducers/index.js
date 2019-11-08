import {combineReducers} from 'redux';
import crud2registerReducer from './crud2registerReducer';


export default combineReducers({
    register: crud2registerReducer
})
