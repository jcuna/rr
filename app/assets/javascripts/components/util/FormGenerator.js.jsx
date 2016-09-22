
class FormGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = props[Object.keys(props)[0]];

        if (typeof this.state.elements == "undefined" || typeof this.state.elements !== 'object') {
            throw "Invalid elements property"
        } else if (typeof this.state.formName === "undefined") {
            throw "Must specify formName"
        }
    }

    render() {
        var form = this.generateForm(
            this.state.elements,
            this.state.formName,
            this.state.buttonValue
        );
        return (<div>{form}</div>);
    }

    generateForm(elements, formName, buttonValue = "Submit") {
        let i = -1;
        return React.createElement('form', {className: formName, onSubmit: this.handleClick},
            elements.map(function (b) {
                formElement = b.formElement == undefined ? 'input' : b.formElement;
                i++;
                return React.createElement('div', {className: 'form-group', key: i},
                    React.createElement(formElement, {
                        key: i,
                        type: b.type,
                        placeholder: b.placeholder,
                        className: 'form-control'
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

    handleClick(e) {
        e.preventDefault();

        if (this.state.callback === undefined) {
            return;
        }

        console.log(this.state.callback);

        this.state.callback();

        // window['Login']['handleClick'].apply('Login');
        //
        // var namespaces = this.state.callback.split(".");
        // var func = namespaces.pop();
        //
        // console.log(User);
        //
        // var context = window;
        // for(var i = 0; i < namespaces.length; i++) {
        //     console.log(context);
        //     context = context[namespaces[i]];
        // }
        // return context[func].apply(context);
    }
}