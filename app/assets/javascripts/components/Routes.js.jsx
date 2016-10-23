/**
 * Created by jgarcia on 10/7/16.
 */

import {Route, Link, IndexRoute} from 'react-router'
import App from './App.js.jsx'
import ErrorPage from './errors/ErrorPage.js.jsx';
import Home from './home/Home.js.jsx';
import Login from './Login.js.jsx';
import Logout from './Containers/LogoutContainer.js.jsx';

const Routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>

        <Route path="*" component={ErrorPage} code={404}/>
    </Route>
);

module.exports = Routes;