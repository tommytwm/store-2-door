import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from './receiverComponents/shop.js';
import LandingPage from './landingpage';
import Deliver from './providerComponents/deliver';
import Items from './receiverComponents/items';
import Providers from './receiverComponents/providers';

// these are routers i.e. in python, @app.route("/")
//                                      def home():
// where the route when typed into URL is what is displayed
// uses route from react dom

//  <Route path="/projects" component={Projects} />
const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/shop" component={Shop} />
        <Route path="/deliver" component={Deliver} />
        <Route path="/items" component={Items} />
        <Route path="/providers" component={Providers} />
    </Switch>
)

export default Main;