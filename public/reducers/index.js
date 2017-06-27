import {combineReducers} from 'redux';
import BookDate from './bookdata';

const finalReducer = combineReducers({
	bookList:BookDate
});

export default finalReducer;