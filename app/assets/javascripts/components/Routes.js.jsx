/**
 * Created by jgarcia on 10/7/16.
 */

import { Route, Link } from 'react-router'

import App from './App.js.jsx'

const Routes = (
    <Route path="/" component={App}>
        {/*<Route path="login" component={Users}>*/}
            {/*<Route path="/user/:userId" component={User} />*/}
        {/*</Route>*/}
        {/*<Route path="*" component={<div>404 error</div>} />*/}
    </Route>
);

module.exports = Routes;