/**
 * Created by Jon on 9/21/16.
 */

class Index extends React.Component {
    constructor(props) {
        super(props);
        if (props.loggedIn) {
            this.state = {
                component: <App/>
            }
        } else {
            this.state = {
                component: <Login/>
            }
        }
    }

    render() {
        return (
            <div className="container">
                {this.state.component}
            </div>
        );
    }
}