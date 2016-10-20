/**
 * Created by jgarcia on 10/7/16.
 */

export default class ErrorPage extends React.Component {
    constructor(props) {
        super(props);

        let code = this.props.code === undefined ? 404 : this.props.code;
        let content = this.props.content[code];

        this.state = {
            title: content.title,
            message: content.message
        }
    }


    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.state.title}</div>
                <div className="panel-body">{this.state.message}</div>
            </div>
        );
    }

}
ErrorPage.defaultProps = {
    content: {
        404: {
            title: 'Page not found',
            message: 'The page you\'re looking for cannot be found'},
        403: {
            title: 'Access denied',
            message: 'You do not have access to access this page'},
    },
};