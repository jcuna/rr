/**
 * Created by Jon on 9/30/16.
 */

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.validateType(this.props.modal.type);
        let type = this.props.modal.type === 'error' ? 'danger' : this.props.modal.type;

        let messages = typeof this.props.modal.messages === 'string' ? [this.props.modal.messages] : this.props.modal.messages;

        this.state = {
            type: type,
            content: messages
        }
    }

    render() {
        return (
            <div className="alert alert-"{this.state.type}" alert-dismissible">
                {this.state.messagtes.map((e, b) => {
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