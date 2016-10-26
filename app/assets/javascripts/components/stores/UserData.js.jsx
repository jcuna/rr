/**
 * Created by jgarcia on 10/21/16.
 */

import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher';
import clearCookies from '../util/clearCookies';
import {browserHistory} from 'react-router';

class UserData extends EventEmitter {
    constructor() {
        super();
        this.user = {
            username: '',
            loaded: false
        };
        this.getUser = this.getUser.bind(this);
        this.setUser = this.setUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    getUser() {
        return this.user;
    }

    setUser(user) {
        this.user = user;
        this.user.loaded = true;
        this.emit('fetched');
    }

    handleActions(action) {
        switch (action.type) {
            case 'UPDATE_USER': {
                this.updateUser(action.user);
                break;
            }
            case 'SET_USER': {
                this.setUser(action.user);
                break;
            }
            case 'NOT_LOGGED_IN': {
                clearCookies();
                browserHistory.push('/login');
                break;
            }
        }
    }

    updateUser(user) {
        //TODO: Update user endpoint
    }
}

const userData = new UserData();
Dispatcher.register(userData.handleActions.bind(userData));
export default userData;
