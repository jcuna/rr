/**
 * Created by Jon on 9/22/16.
 */

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let loginData = {
            username: this.props.login.username,
            password: this.props.login.password
        };
        return $.ajax({
            url: "/login",
            method: 'POST',
            data: loginData,
            dataType: 'json',
        }).then(response => {
            if (response.status == 200) {
                this.props.login.onSuccess()
            } else {
                this.props.login.onFailure(response.data)
            }
        });
    }

    render() {
        return <div></div>
    }

}