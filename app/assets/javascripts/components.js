require('babel-polyfill');
require('es6-promise').polyfill();

import 'whatwg-fetch'
import Routes from 'components/Routes.js.jsx'
import { Router, browserHistory } from 'react-router'

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <Router routes={Routes} history={browserHistory} />,
        document.querySelector('#app')
    );
});

/**
 * TODO: move to own file
 */
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g,'');
    };
}