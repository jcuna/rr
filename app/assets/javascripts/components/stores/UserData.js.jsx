/**
 * Created by jgarcia on 10/21/16.
 */

import {EventEmitter} from 'events';
import Dispatcher from '../Dispatcher';
import api from '../util/api';

class UserData extends EventEmitter {
    constructor() {
        super();
        this.user = {
            username: '',
            loaded: false
        };
        this.getUser = this.getUser.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
        this.setUser = this.setUser.bind(this);
        this.fetchUser();
    }

    getUser() {
        return this.user;
    }

    setUser(user) {
        this.user = user;
        this.user.loaded = true;
        this.emit('change');
    }

    handleActions(action) {
        switch (action.type) {
            case 'UPDATE_USER': {
                this.updateUser.bind(this, action.user);
            }
        }
    }

    updateUser(user) {
        //TODO: Update user endpoint
    }

    fetchUser() {
        api('user/get-current', 'get').then(response => {
            this.setUser(response.data);
        }, error => {
            clearCookies();
            browserHistory.push('/login');
        });
    }
}

const userData = new UserData();
Dispatcher.register(userData.handleActions.bind(userData));
export default userData;
