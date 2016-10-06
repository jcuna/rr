/**
 * Created by Jon on 9/21/16.
 */

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.reRender = this.reRender.bind(this);

        if (props.loggedIn) {
            this.state = {
                component: <App/>
            }
        } else {
            this.state = {
                component: <Login success={this.reRender}/>
            }
        }
    }

    reRender() {
        this.setState({
            component: <App/>
        })
    }

    render() {
        return this.state.component;
    }
}