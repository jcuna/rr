/**
 * Created by Jon on 9/21/16.
 */

// const Router = ReactRouter;

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        <Router routes={Routes} />,
        document.querySelector('#app')
    );

    //
    // Router.run(Routes, function (Handler) {
    //     console.log(Routes);
    //
    //     ReactDOM.render(<Handler/>,
    //         document.querySelector('#app')
    //     );
    // });
});


