import React,{Component} from 'react';
import {connect} from 'react-redux'; 
import {selectBook} from '../actions/selectBook';
import {bindActionCreators} from 'redux';
import style from './booklist.css';

class BookList extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
               <ul>{this.iterateItems()}</ul>
		);
	}

	iterateItems(){
		return(
		   this.props.books.map((book)=>{
		   	 return(<li className={style.select} key={book.name} onClick={() => {this.props.selectBook(book)}}>{book.name}</li>)
		   })
		);
	}

}

function mapPropsToState(state){
     return {books:state.bookList};
}

function mapPropsToAction(dispatch){
     return bindActionCreators({selectBook:selectBook},dispatch);
}

export default connect(mapPropsToState,mapPropsToAction)(BookList);
