
// const Router = ReactRouter;
const Route = ReactRouter.Route;
// const BrowserHistory = ReactRouter;
// const IndexRoute = ReactRouter.IndexRoute;

class App extends React.Component {

    render() {
        return (
            <div className="full-body">
                <div className="full-body">
                    <div id="content">
                        <CurrentUserContainer/>

                        {/*<CurrentUserContainer/>*/}
                        {/*<Router history={BrowserHistory}>*/}
                            {/*<Route path="/" component={Content}>*/}
                                {/*<Route path="login" component={Login}/>*/}
                            {/*</Route>*/}
                        {/*</Router>*/}
                    </div>
                    <Footer/>
                </div>
                <div id="modal-container"></div>
            </div>
        );
    }
}