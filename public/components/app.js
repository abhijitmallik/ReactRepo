import React from 'react';
import {Component} from 'react';


import ReactDOM from 'react-dom'; 

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import Books from '../containers/booklist';


export default class App extends Component{
	render(){
		return(
          <div>
            <Books />
          </div>
		)
	}
}

const store = createStore(reducers);
const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('divId'));

