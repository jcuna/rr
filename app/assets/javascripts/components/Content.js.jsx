/**
 * Created by Jon on 9/15/16.
 */

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                Hello Peeps
                {this.props.contentProp}
            </div>
        );
    }
}
