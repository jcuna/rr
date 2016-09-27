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
            errors: [],
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
            <div>
                <div className="well"><h2>Login</h2></div>
                {this.state.errors}
                {this.state.renderObject}
                <h5 className="sign-in" onClick={this.signUp} style={
                    {
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        display: 'inline'
                    }
                }>Sign Up</h5>
            </div>
        )
    }

    signUp(e) {
        console.log(e);
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

        if (this.refs.username.value == '' || this.refs.password.value == '') {
            this.setState({
                errors: this.formatErrors('Username or password may not be blank'),
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
        this.setState({
            errors: this.formatErrors(errors),
            renderObject: this.getForm()
        });
    }

    formatErrors(errors) {
        errors = typeof errors === 'string' ? [errors] : errors;
        return (
            <div className="alert alert-danger alert-dismissible">
            {errors.map((e, b) => {
                return (<div key={b}>{e}</div>)
            })}
            </div>
        )
    }
}