/**
 * Created by jgarcia on 10/7/16.
 */

class LogoutContainer extends React.Component {

    componentWillMount() {
        api('logout', 'delete').then(function(response) {
            window.location('/');
        });
    }

    render() {
        return (<Index/>);
    }
}
