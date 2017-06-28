import {combineReducers} from 'redux';
import BookDate from './bookdata';
import book from './book';

const finalReducer = combineReducers({
	bookList:BookDate,
	bookSelected:book
});

export default finalReducer;