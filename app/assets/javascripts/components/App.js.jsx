
class App extends React.Component {
    render() {
        return (
            <div className="full-body">
                <div id="content">
                    <CurrentUserContainer/>
                    <Content/>
                </div>
                <Footer/>
            </div>
        );
    }
}