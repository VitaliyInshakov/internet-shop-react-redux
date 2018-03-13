import './main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'react-router-redux'
import {Provider} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import Layout from './containers/layout';
import Phone from './containers/phone';
import Phones from './containers/phones';
import Basket from './containers/basket';

const browserHistory = createBrowserHistory();
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk, routerMiddleware(browserHistory))
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path='/' render={props => <Layout><Phones></Phones></Layout>} />
        <Route path='/categories/:id' render={props => <Layout><Phones></Phones></Layout>} />
        <Route path='/phones/:id' component={Phone}/>
        <Route path='/basket' component={Basket}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)