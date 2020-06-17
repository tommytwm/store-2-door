import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Shop from './receiverComponents/shop.js';
import LandingPage from './landingpage';
import Deliver from './providerComponents/deliver';
import Items from './receiverComponents/items';
import Providers from './receiverComponents/providers';
import SignIn from './signinpage';
import Orders from './receiverComponents/orders';


const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/shop" component={Shop} />
        <Route path="/deliver" component={Deliver} />
        <Route path="/items" component={Items} />
        <Route path="/providers" component={Providers} />
        <Route path="/signin" component={SignIn} />
        <Route path="/orders" component={Orders} />
    </Switch>
)

export default Main;