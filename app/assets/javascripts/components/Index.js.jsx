/**
 * Created by Jon on 9/21/16.
 */

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.updateComponent = this.updateComponent.bind(this);

        if (props.loggedIn) {
            this.state = {
                component: <App/>
            }
        } else {
            this.state = {
                component: <Login updateState={this.updateComponent}/>
            }
        }
    }

    updateComponent(newComponent) {
        this.setState({
            component: newComponent
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.component}
            </div>
        );
    }
}