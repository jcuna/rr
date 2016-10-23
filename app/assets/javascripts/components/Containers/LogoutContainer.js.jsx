/**
 * Created by jgarcia on 10/7/16.
 */

import api from '../util/api';
import {browserHistory} from 'react-router';

export default class LogoutContainer extends React.Component {

    componentWillMount() {
        api('logout', 'delete').then( function () {
            browserHistory.push('/');
        });
    }

    render() {
        return (<div>logging out...</div>);
    }
}
