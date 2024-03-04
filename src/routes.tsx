import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./error/404";
export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route component={NotFound} />
                </Switch>;
            </React.Fragment>
        );
    }
}
