/**
 * Created by jgarcia on 10/7/16.
 */

import {Link} from 'react-router';
import Modal from '../util/Modal.js.jsx';
import Review from '../Review.js.jsx';

export default class Home extends React.Component {
    render() {
        const style = {
            cursor: 'pointer',
            fontWeight: 'bold',
            display: 'inline'
        };
        return(
            <div className="new-review">
                <h2 onClick={this.newPost.bind(this)} style={style}>New Review</h2>
            </div>
        )
    }

    newPost() {
        Modal.new(<Review/>, 'New Review');
    }
}
