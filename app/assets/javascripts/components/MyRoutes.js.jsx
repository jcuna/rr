/**
 * Created by jgarcia on 10/7/16.
 */

var Route = ReactRouter.Route;

Route.MyRoutes = (
    <Route handler={App}>
        <Route name='Home' handler={App} path='/#' />
    </Route>
);
