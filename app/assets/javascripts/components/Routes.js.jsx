/**
 * Created by jgarcia on 10/7/16.
 */

import {Route, Link} from 'react-router'
import App from './App.js.jsx'
import ErrorPage from './errors/ErrorPage.js.jsx';
import Content from './Content.js.jsx';

const Routes = (
    <Route path="/" component={App}>
        <Route component={Content}>
            {/*<Route path="login" component={Users}>*/}
                {/*<Route path="/user/:userId" component={User} />*/}
            {/*</Route>*/}
            <Route path="*" component={ErrorPage} />
        </Route>
    </Route>
);

module.exports = Routes;