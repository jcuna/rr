/**
 * Created by jgarcia on 10/7/16.
 */

import {Link} from 'react-router';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <h2>This is the home page</h2>
                <Link to="login" className="btn btn-info">Login</Link>
            </div>
        )
    }
}
