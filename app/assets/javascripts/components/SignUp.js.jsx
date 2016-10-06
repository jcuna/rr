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
            notification: <div></div>,
            renderObject: this.getForm()
        };
    }

    getForm() {
        return (
         <div>
            <FormGenerator props={this.getFormProps()}/>
        </div>
        )
    }

    render() {
        return(
            <div>
                {this.state.notification}
                {this.state.renderObject}
            </div>
        );
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
        this.createUser();
    };

    onSuccessLogin() {
        this.props.updateState(<App/>);
    }

    onFailureLogin(errors) {
        let key = Date.now() / 1000 | 0;
        this.setState({
            notification: <Notification type="error" messages={errors} key={key}/>,
            renderObject: this.getForm()
        });
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
        $.ajax({
            url: "/user/create",
            method: 'POST',
            data: userData,
            dataType: 'json',
        }).then(response => {
            if (response.status == 200) {
                this.props.accountCreated()
            } else {
                this.onFailureLogin(response.data);
            }
        });
    }
}