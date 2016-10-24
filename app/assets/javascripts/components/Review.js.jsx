/**
 * Created by Jon on 10/23/16.
 */

import FormGenerator from './util/FormGenerator.js.jsx';
import api from './util/api';

export default class Review extends React.Component {

    render() {
        let formProps = {
            elements: [
                {type: 'text', placeholder: 'Search App', onChange: this.findApp.bind(this)},
                {formElement: 'textarea', placeholder: 'Write review', onChange: this.validateReview},
                {type: 'hidden', name: 'stars'}
            ],
            formName: 'post-review',
            buttonValue: 'Post',
            callback: this.handleClick.bind(this),
            object: this
        };

        return <FormGenerator props={formProps}/>
    }

    findApp(e) {
        let term = e.target.value;
        if (term.length < 3) {
            return;
        }

        const url = 'https://itunes.apple.com/search';
        let query = {
            entity: 'software',
            limit: 10,
            term: e.target.value,
        };
        api(url, 'get', query, 'callback').then(response => {
            console.log(response);
        });
    }

    handleClick(e) {
        console.log(e);
    }
}