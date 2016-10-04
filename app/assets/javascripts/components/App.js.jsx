
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Header from props...",
            content: "Content from props..."
        }
    }

    render() {
        return (
            <div className="full-body">
                <div id="content">
                    <Header/>
                    <Content contentProp = {this.state.content}/>
                </div>
                <Footer/>
            </div>
        );
    }
}