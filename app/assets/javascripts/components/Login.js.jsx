/**
 * Created by Jon on 9/21/16.
 */

class Login extends React.Component {

    render() {
        return (
            <div>
                <div className="well"><h2>Login</h2></div>
                <FormGenerator props = {this.props}/>
            </div>
        );
    }
}

Login.defaultProps = {
    elements: [
        {type: 'text', placeholder: 'Username'},
        {type: 'password', placeholder: 'Password'}
    ],
    formName: 'login-form',
    buttonValue: 'Login',
    callback: this.handleClick
};

Login.handleClick = function () {
    alert('hi');
};