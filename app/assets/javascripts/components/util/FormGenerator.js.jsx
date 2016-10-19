/**
 * Created by Jon on 9/21/16.
 */

export default class FormGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.state = props[Object.keys(props)[0]];

        if (typeof this.state.elements == "undefined" || typeof this.state.elements !== 'object') {
            throw "Invalid elements property"
        } else if (typeof this.state.formName === "undefined") {
            throw "Must specify formName"
        }
    }

    /**
     *
     * @returns {XML}
     */
    render() {
        let form = this.generateForm(
            this.state.elements,
            this.state.formName,
            this.state.buttonValue
        );
        return (<div>{form}</div>);
    }

    /**
     * pass refs down to callee
     */
    componentDidMount() {
        if (typeof this.state.object !== "undefined") {
            this.state.object.refs = this.refs;
        }
    }

    /**
     *
     * @param elements
     * @param formName
     * @param buttonValue
     * @returns {*}
     */
    generateForm(elements, formName, buttonValue = "Submit") {
        return React.createElement('form', {className: formName, onSubmit: this.state.callback},
            elements.map((b, k) => {
                let formElement = b.formElement == undefined ? 'input' : b.formElement;
                let reference = b.placeholder.replace(/[^\w]/g, '_').toLowerCase();

                return React.createElement('div', {className: 'form-group', key: k},
                    React.createElement(formElement, {
                        type: b.type,
                        placeholder: b.placeholder,
                        className: 'form-control '+b.className,
                        onChange: b.onChange,
                        ref: reference,
                        value: b.value,
                        defaultValue: b.defaultValue,
                    })
                )
            }),
            React.createElement('div', {className: 'form-group'},
                React.createElement(
                    'button', {
                        type: 'submit',
                        className: "btn btn-primary",
                    },
                    buttonValue
                )
            )
        )
    }
}