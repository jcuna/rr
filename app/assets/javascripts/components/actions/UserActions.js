/**
 * Created by Jon on 10/22/16.
 */

import Dispatcher from '../Dispatcher';

export function updateUser(user) {
    Dispatcher.dispatch({
        type: 'UPDATE_USER',
        user
    });
}
