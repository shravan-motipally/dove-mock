import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/components/App';
import Home from './js/components/Home';
import Photos from './js/components/Photos';
import { createStore } from 'redux';
import mainReducer from './js/reducers/mainReducer';
import registerServiceWorker from './js/registerServiceWorker';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


const store = createStore(mainReducer);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/photos" component={Photos} />
            </Switch>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
