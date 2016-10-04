/**
 * Created by Jon on 9/15/16.
 */
class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <footer className="panel-footer">
                    <div className="container">
                        <p>Created by Jon Garcia</p>
                        <p><a href="mailto:garciajon@me.com">garciajon@me.com</a></p>
                        <p>
                            <script src="https//platform.linkedin.com/in.js" type="text/javascript"></script>
                            <script type="IN/MemberProfile" data-id="https://www.linkedin.com/in/jonag" data-format="hover" data-text="Jon Garcia"></script>
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}