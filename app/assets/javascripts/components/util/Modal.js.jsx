/**
 * Created by Jon on 9/30/16.
 */

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.closeModal = this.closeModal.bind(this);

        this.state = {
            content: this.props.content,
            title: this.props.title,
            footer: this.props.footer
        }
    }

    componentDidMount() {
        let domElement = ReactDOM.findDOMNode(this);
        domElement.onkeydown = (e) => {
            //keyCode 27 is the escape key
            if (e.keyCode === 27) {
                this.closeModal(e);
            }
        };
        domElement.focus();
    }

    componentWillUnmount() {
        let domElement = ReactDOM.findDOMNode(this);
        domElement.blur();
    }

    render() {

        let footer = '';
        if (this.state.footer !== undefined) {
            footer = <div className="modal-footer">{this.state.footer}</div>;
        }
        return (
            <div id="modal-window" tabIndex="0" onClick={this.closeModal}>
                <div className="modal-content" onClick={this.stopPropagation}>
                    <div className="modal-header">
                        <button className="close" onClick={this.closeModal}> </button>
                        <h2 className="modal-title">{this.state.title}</h2>
                    </div>
                    <div className="modal-body">
                        {this.state.content}
                    </div>
                    {footer}
                </div>
            </div>
        )
    }
}

Modal.prototype.stopPropagation = function (e) {
    e.stopPropagation();
};


Modal.prototype.closeModal = function (e) {
    if (e !== undefined) {
        e.stopPropagation();
    }
    this.unMount();
};

Modal.prototype.unMount = function () {
    ReactDOM.unmountComponentAtNode(document.getElementById('modal-container'));
};

Modal.new = function (content, title, footer) {
    return ReactDOM.render(
        <Modal content={content} title={title} footer={footer}/>,
        document.getElementById('modal-container')
    );
};