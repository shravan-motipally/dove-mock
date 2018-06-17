import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Home from './js/components/Home';
import Photos from './js/components/Photos';
import About from './js/components/About';
import Error from './js/components/Error';
import {createStore} from 'redux';
import mainReducer from './js/reducers/mainReducer';
import registerServiceWorker from './js/registerServiceWorker';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import { base_path, home_path, photos_path, about_path, not_found_path } from './js/constants/all-routes';


const store = createStore(mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path={base_path} component={Home} />
                <Route path={home_path} component={Home} />
                <Route path={photos_path} component={Photos} />
                <Route path={about_path} component={About} />
                <Route path={not_found_path} component={Error} />
                <Redirect from="*" to={not_found_path} />
            </Switch>
        </HashRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
