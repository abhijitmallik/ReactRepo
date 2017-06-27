import React,{Component} from 'react';
import {connect} from 'react-redux'; 
//import Reducer from '../reducers/index';

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
		   	 return(<li key={book.name}>{book.name}</li>)
		   })
		);
	}
}

function mapPropsToState(state){
     return {books:state.bookList};
}

export default connect(mapPropsToState)(BookList);
