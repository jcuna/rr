/**
 * Created by jgarcia on 10/7/16.
 */

class CurrentUserContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            component: <div>Loading...</div>
        }
    }

    componentWillMount() {
        api('user/get-current', 'get').then(response => {
            this.setState({
                component: <Header user={response.data}/>
            });
        }, error => {
            console.error(error);
            clearCookies();
            location.reload();
        });
    }

    render() {
        return (this.state.component);
    }
}