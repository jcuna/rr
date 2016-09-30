/**
 * Created by Jon on 9/21/16.
 */

class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.createUser = this.createUser.bind(this);
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
            <div id="modal-window">
                <div className="modal-content">
                    <span className="modal-close" onClick={this.props.unMount}> </span>
                    <div className="well"><h2>Sign Up</h2></div>
                    {this.state.errors}
                    {this.state.renderObject}
                </div>
            </div>
        )
    }

    getFormProps() {
        return {
            elements: [
                {type: 'text', placeholder: 'First Name', onChange: this.validateFirst},
                {type: 'text', placeholder: 'Last Name', onChange: this.validateLast},
                {type: 'text', placeholder: 'Username', onChange: this.validateUsername},
                {type: 'text', placeholder: 'Email', onChange: this.validateEmail},
                {type: 'password', placeholder: 'Password', onChange: this.validatePassword},
                {type: 'password', placeholder: 'Confirm Password', onChange: this.validatePasswordConfirmation}
            ],
            formName: 'registration-form',
            buttonValue: 'Sign Up',
            callback: this.handleClick,
            object: this
        }
    }

    handleClick(e) {
        e.preventDefault();

        // if (this.refs.username.value == '' || this.refs.password.value == '') {
        //     this.setState({
        //         errors: this.formatErrors('Username or password may not be blank'),
        //         renderObject: this.getForm()
        //     })
        // } else {
            this.createUser();
        // }
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

    createUser() {
        let userData = {
            first: this.refs.first_name.value,
            last: this.refs.last_name.value,
            username: this.refs.username.value,
            email: this.refs.email.value,
            password: this.refs.password.value,
            password_confirmation: this.refs.confirm_password.value,

        };
        return $.ajax({
            url: "/user/create",
            method: 'POST',
            data: userData,
            dataType: 'json',
        }).then(response => {
            if (response.status == 200) {
                this.props.unMount()
            } else {
                console.error(response);
            }
        });
    }
}