import React, {Suspense} from 'react';
import Loader from "../loader/Loader";
import {Route, Switch} from "react-router-dom";
import routes from "../../routes/routes";

const Main = () => {
    return (
        <>
            <Suspense fallback={<Loader/>}>
                <Switch>
                    {routes.map(route => (
                        <Route
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                            key={route.path}
                        />
                    ))}
                </Switch>
            </Suspense>
        </>
    );
};

export default Main;