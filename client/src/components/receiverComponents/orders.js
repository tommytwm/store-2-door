import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Item from './items';
// <Cell col={6}><Item orderId={o.requestId}></Item></Cell>
// show ORDER ID: item 1,2,3.... total price: xxx
class Orders extends Component { // props: pId
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        fetch(proxyurl+ 'https://store-2-door.herokuapp.com/api/providerGoesTo/' + this.state.pId)// change this
            .then(res => res.json())
            .then(trips => this.setState({ trips }, () => console.log('trips fetched...', trips)));
    }

    render() {
    return (
            <Grid>
                <Cell col={4}>
                    <h1>Orders:</h1>

                </Cell>

                <Cell col={12}>
                    <div>
                        Trips:
                        {this.state.trips.orders(function (o) {
                            return (
                            <div>
                                <Cell col={6}><h3>{o.requestId}</h3></Cell>
                               
                            </div>
                        )
                    }, this)}

                    </div>

                </Cell>
            </Grid>
        )
    }
}

export default Orders;
