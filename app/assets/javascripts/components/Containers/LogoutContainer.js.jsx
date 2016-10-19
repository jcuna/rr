/**
 * Created by jgarcia on 10/7/16.
 */
import App from '../App.js.jsx';
import api from '../util/api';

export default class LogoutContainer extends React.Component {

    componentWillMount() {
        api('logout', 'delete');
    }

    render() {
        return (<App/>);
    }
}
