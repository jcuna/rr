/**
 * Created by Jon on 9/30/16.
 */

export default class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.validateType(this.props.type);
        let type = this.props.type === 'error' ? 'danger' : this.props.type;

        let messages = typeof this.props.messages === 'string' ?
            [this.props.messages] : this.props.messages;

        this.state = {
            type: type,
            content: messages
        }
    }

    render() {
        return (
            <div className={"alert alert-"+this.state.type}>
                {this.state.content.map((e, b) => {
                    return (<div key={b}>{e}</div>)
                })}
            </div>
        )
    }

    validateType($type) {
        let notificationTypes = ['info', 'error', 'success', 'danger', 'warning'];

        if (!notificationTypes.includes($type)) {
            throw 'Invalid notification type';
        }
    }
}