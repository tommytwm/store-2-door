import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TestApi from './testApi';

// these are routers i.e. in python, @app.route("/")
//                                      def home():
// where the route when typed into URL is what is displayed
// uses route from react dom

//  <Route path="/projects" component={Projects} />
const Main = () => (
    <Switch>
        <Route path="/testApi" component={TestApi} />
    </Switch>
)

export default Main;