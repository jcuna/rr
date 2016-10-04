/**
 * Created by Jon on 9/30/16.
 */

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.validateType(this.props.notification.type);
        let type = this.props.notification.type === 'error' ? 'danger' : this.props.notification.type;

        let messages = typeof this.props.notification.messages === 'string' ?
            [this.props.notification.messages] : this.props.notification.messages;

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