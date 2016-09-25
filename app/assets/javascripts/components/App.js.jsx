
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
            <div>
                <Header/>
                <Content contentProp = {this.state.content}/>
                <Footer/>
            </div>
        );
    }
}