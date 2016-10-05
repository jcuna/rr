/**
 * Created by Jon on 9/30/16.
 */

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);

        this.state = {
            content: this.props.child
        }
    }

    render() {
        return (
            <div id="modal-window" onClick={this.closeModal}>
                <div className="modal-content" onClick={this.stopPropagation}>
                    <span className="modal-close" onClick={this.closeModal}> </span>
                    <div className="modal-body">
                        {this.state.content}
                    </div>
                </div>
            </div>
        )
    }
}

Modal.prototype.stopPropagation = function (e) {
    e.stopPropagation();
};


Modal.prototype.closeModal = function (e) {
    e.stopPropagation();
    this.unMount();
};

Modal.prototype.unMount = function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('modal-container'));
};


Modal.new = function (child) {
    ReactDOM.render(
        <Modal child={child}/>,
        document.getElementById('modal-container')
    );
};