/**
 * Created by Jon on 10/22/16.
 */

import Dispatcher from '../Dispatcher';
import api from '../util/api';

export function updateUser(user) {
    Dispatcher.dispatch({
        type: 'UPDATE_USER',
        user
    });
}

export function fetchUser() {
    api('user/get-current', 'get').then(response => {
        Dispatcher.dispatch({
            type: 'SET_USER',
            user: response.data
        });
    }, error => {
        Dispatcher.dispatch({
            type: 'NOT_LOGGED_IN',
            error: error
        });
    });
}
