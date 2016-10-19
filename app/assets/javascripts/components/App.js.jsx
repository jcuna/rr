/**
 * Created by jgarcia on 10/7/16.
 */
import Footer from './Footer.js.jsx';
import CurrentUserContainer from './Containers/CurrentUserContainer.js.jsx';

export default class App extends React.Component {

    render() {
        return (
            <div className="full-body">
                <div className="full-body">
                    <div id="content">
                        <CurrentUserContainer/>
                    </div>
                    <Footer/>
                </div>
                <div id="modal-container"></div>
            </div>
        );
    }
}