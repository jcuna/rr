require( 'babel-polyfill' );

import Routes from 'components/Routes.js.jsx'

import { Router, browserHistory } from 'react-router'

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <Router routes={Routes} history={browserHistory} />,
        document.querySelector('#app')
    );
});