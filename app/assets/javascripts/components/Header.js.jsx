/**
 * Created by Jon on 9/15/16.
 */

import LogoutContainer from './Containers/LogoutContainer.js.jsx';

export default class Header extends React.Component {

    constructor(props) {
        super(props);

        this.header = this.header.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            component: this.header()
        }
    }

    logout() {
        this.setState({
            component: <LogoutContainer/>
        });
    }

    render() {
        return (this.state.component);
    }

    header() {
        let user = this.props.user;
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
                        <a className="navbar-brand" href="#">React</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="">Link <span className="sr-only">(current)</span></a></li>
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
                                    <li><a onClick={this.logout}>logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}