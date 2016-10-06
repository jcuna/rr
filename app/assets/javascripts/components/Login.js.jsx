/**
 * Created by Jon on 9/21/16.
 */

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.onSuccessLogin = this.onSuccessLogin.bind(this);
        this.onFailureLogin = this.onFailureLogin.bind(this);

        this.state = {
            errors: <div></div>,
            renderObject: this.getForm()
        };

    }

    getForm() {
        return (
         <div>
            <FormGenerator props = {this.getFormProps()}/>
        </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="well"><h2>Login</h2></div>
                {this.state.errors}
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
                errors: <Notification
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
                    onFailure: this.onFailureLogin
                }}/>
            });
        }
    };

    onSuccessLogin() {
        this.props.updateState(<App/>);
    }

    onFailureLogin(errors) {
        let key = Date.now() / 1000 | 0;
        this.setState({
            errors: <Notification notification={{
                type: 'error',
                messages: errors
            }} key={key}/>,
            renderObject: this.getForm()
        });
    }
}

Login.prototype.signUp = function () {
    Modal.new(<SignUp/>, 'Sign Up');
};