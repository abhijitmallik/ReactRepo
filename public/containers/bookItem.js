import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookItem extends Component{
	constructor(props){
       super(props);
	}
	render(){
		if(!this.props.book){
			return(<div>please select one book....</div>)
		}
		return(
		    <div>
				<div>BookName:{this.props.book.name}</div>
				<div>BookPage:{this.props.book.page}</div>
			</div>
			)
	}
}

function mapToProps(state){
   return {
   	  "book" : state.bookSelected
   }
} 

export default connect(mapToProps)(BookItem);
