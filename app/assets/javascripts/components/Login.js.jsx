/**
 * Created by Jon on 9/21/16.
 */

import {browserHistory} from 'react-router';
import FormGenerator from './util/FormGenerator.js.jsx';
import Notification from './util/Notification.js.jsx';
import LoginContainer from './Containers/LoginContainer.js.jsx';
import Modal from './util/Modal.js.jsx';
import SignUp from './SignUp.js.jsx';
import userData from './stores/UserData.js.jsx';
import * as UserActions from './actions/UserActions';

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.accountCreated = this.accountCreated.bind(this);
        this.signUp = this.signUp.bind(this);

        this.state = {
            messages: <div></div>,
            renderObject: this.getForm()
        };
    }

    componentWillMount() {
        if (!userData.getUser().loaded) {
            userData.on("change", () => {
                browserHistory.push('/');
            });
        } else {
            browserHistory.push('/');
        }
    }

    getForm() {
        return (
         <div>
            <FormGenerator props={this.getFormProps()}/>
        </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="well"><h2>Login</h2></div>
                {this.state.messages}
                {this.state.renderObject}
                <h5 className="sign-up" onClick={this.signUp} style={{
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    display: 'inline'
                }}>Sign Up</h5>
            </div>
        )
    }

    getFormProps() {
        return {
            elements: [
                {type: 'text', placeholder: 'Username', onChange: this.validateUsername},
                {type: 'password', placeholder: 'Password', onChange: this.validatePassword}
            ],
            formName: 'login-form',
            buttonValue: 'Login',
            callback: this.handleClick,
            object: this
        }
    }

    handleClick(e) {
        e.preventDefault();
        let key = Date.now() / 1000 | 0;
        if (this.refs.username.value == '' || this.refs.password.value == '') {
            this.setState({
                messages: <Notification
                    type="error"
                    messages="Username name and password cannot be blank"
                    key={key}/>,
                renderObject: this.getForm()
            })
        } else {
            this.setState({
                renderObject: <LoginContainer login={{
                    username: this.refs.username.value,
                    password: this.refs.password.value,
                    onSuccess: this.onSuccessLogin,
                    onFailure: this.onFailureLogin.bind(this)
                }}/>
            });
        }
    };

    onSuccessLogin() {
        UserActions.fetchUser();
    }

    accountCreated() {
        this.modal.closeModal();
        let key = Date.now() / 1000 | 0;
        this.setState({
            messages: <Notification
                type="success"
                messages='Account created successfully'
                key={key}/>,
            renderObject: this.getForm()
        });
    }

    onFailureLogin(messages) {
        let key = Date.now() / 1000 | 0;
        this.setState({
            messages: <Notification
                type="error"
                messages={messages}
                key={key}/>,
            renderObject: this.getForm()
        });
    }
}

Login.prototype.signUp = function () {
    this.modal = Modal.new(<SignUp accountCreated={this.accountCreated}/>, 'Sign Up');
};