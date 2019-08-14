import React from 'react';
import {Router, Route, Switch} from "react-router-dom";
import * as pages from "../pages";
import {history} from "../../helpers/history";
import GlobalError from "../../components/GlobalPrompts/GlobalError";

export default (store) => {
    const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
        <Route {...rest} render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )}/>
    );

    const MainLayout = props => (
        <>
            <GlobalError/>
            {props.children}
        </>
    );

    return (
        <Router history={history}>
            <Switch>
                <AppRoute exact path={`/`} layout={MainLayout} component={pages.HomePage}/>
            </Switch>
        </Router>
    );

}
