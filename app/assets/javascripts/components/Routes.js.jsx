/**
 * Created by jgarcia on 10/7/16.
 */
//
// var Router = ReactRouter.RouteHandler;
//
// Route.Routes = (
//     <Router history={ReactRouter.HashHistory}>
//         <Route path="/" component={App}/>
//     </Router>
// );
const Route = ReactRouter.Route;
const Routes = (
    <Route path="/" component={App}>
        {/*<Route path="login" component={Users}>*/}
            {/*<Route path="/user/:userId" component={User} />*/}
        {/*</Route>*/}
        <Route path="*" component={<div>404 error</div>} />
    </Route>
);