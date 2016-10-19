/**
 * Created by Jon on 9/22/16.
 */

import api from '../util/api';

export default class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        let loginData = {
            username: this.props.login.username,
            password: this.props.login.password
        };

        api('login', 'post', loginData).then(response => {
            this.props.login.onSuccess(response)
        }, error => {
            this.props.login.onFailure(error.data)
        });
    }

    render() {
        return (<div></div>);
    }
}