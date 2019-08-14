import React, { Component } from "react";
import {Provider} from "react-redux";
import getAppConfigurations from "../helpers/getAppConfigurations";

let getAppStore;

export default  class App extends Component {

    render() {
        const {store, routes} = getAppConfigurations();
        getAppStore = () => store;

        return (
            <Provider store={store}>
                {routes}
            </Provider>
        );
    };
}

export { getAppStore };
