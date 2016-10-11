/**
 * Created by Jon on 9/21/16.
 */

Router = ReactRouter;

document.addEventListener("DOMContentLoaded", function() {
    // ReactDOM.render(
    //     <Router routes={Routes} />,
    //     document.getElementById('app')
    // );

    Router.run(Routes, function (Handler) {
        console.log(Routes);

        ReactDOM.render(<Handler/>,
            document.getElementById('app')
        );
    });
});


