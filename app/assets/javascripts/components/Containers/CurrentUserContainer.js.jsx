/**
 * Created by jgarcia on 10/7/16.
 */

class CurrentUserContainer extends React.Component {
    constructor(props) {
        super(props);

        this.getUser = this.getUser.bind(this);

        this.state = {
            component: <div>Loading...</div>
        }
    }

    componentWillMount() {
        this.getUser();
    }

    render() {
        return (this.state.component);
    }

    getUser() {
        api('user/get-current', 'get').then(response => {
            this.setState({
                component: <Header user={response.data}/>
            });
        }, error => {
            clearCookies();
            this.setState({
                component: <Login success={this.getUser}/>
            });
        });
    }
}