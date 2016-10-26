/**
 * Created by Jon on 9/15/16.
 */

import userData from './stores/UserData.js.jsx';
import {Link} from 'react-router';
import * as userActions from './actions/UserActions';
import * as dropdown from './util/dropdown';

export default class Header extends React.Component {

    constructor() {
        super();

        this.header = this.header.bind(this);

        let user = userData.getUser();
        let component = <div></div>;

        if (user.loaded) {
            component = this.header(user);
        }

        this.state = {
            component: component
        }
    }

    componentWillMount() {
        userActions.fetchUser();
        userData.on("fetched", () => {
            this.setState({
                component: this.header(userData.getUser())
            });

            dropdown.bindDropDowns();
        });
    }

    render() {
        return this.state.component
    }

    header(user) {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">AppRev</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="">Link</a></li>
                            <li><a href="">Link</a></li>
                            <li className="dropdown">
                                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="">Action</a></li>
                                    <li><a href="">Another action</a></li>
                                    <li><a href="">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="">Separated link</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><a href="">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="">Link</a></li>
                            <li className="dropdown">
                                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{user.username} <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="">Action</a></li>
                                    <li><a href="">Another action</a></li>
                                    <li><a href="">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li><Link to="/logout">Logout</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}