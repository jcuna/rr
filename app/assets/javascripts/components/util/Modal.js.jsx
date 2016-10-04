/**
 * Created by Jon on 9/30/16.
 */

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            close: this.props.modal.onClose,
            content: this.props.modal.content
        }
    }

    render() {
        console.log(this.state.content);
        return (
            <div id="modal-window">
                <div className="modal-content">
                    <span className="modal-close" onClick={this.state.close}> </span>
                    {this.state.content}
                </div>
            </div>
        )
    }
}