/**
 * Created by jgarcia on 10/7/16.
 */

import Footer from './Footer.js.jsx';
import Header from './Header.js.jsx';
import Content from './Content.js.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="full-body">
                <div className="full-body">
                    <div id="content">
                        <Header/>
                        <Content components={this.props.children}/>
                    </div>
                    <Footer/>
                </div>
                <div id="modal-container"></div>
            </div>
        );
    }
}