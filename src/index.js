import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import cartReducer from './components/components/cartReducer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
