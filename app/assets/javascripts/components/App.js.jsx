
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: "Content from props..."
        }
    }

    render() {
        return (
            <div className="full-body">
                <div id="content">
                    <CurrentUserContainer/>
                    <Content contentProp = {this.state.content}/>
                </div>
                <Footer/>
            </div>
        );
    }
}