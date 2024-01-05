import { combineReducers } from 'redux';
import todo from './toDoReducers';
 
export default combineReducers({
    todo: todo
});