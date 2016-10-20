/**
 * Created by Jon on 9/15/16.
 */

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let components = this.props.components.map((path, b) => {
            return <path.component key={b}/>
        });
        return (
            <div className="container">
                {components}
            </div>
        );
    }
}
