import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Item from './item';

// show ORDER ID: item 1,2,3.... total price: xxx
class Orders extends Component { // props: pId
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/"; // note: using heroku server does not work 
        fetch('api/orderRequest/by-receiver/' + sessionStorage.getItem('uId'))// change this
            .then(res => res.json())
            .then(orders => this.setState({ orders }, () => console.log('orders fetched...', orders)));
    }
    


    render() {
    return (
            <Grid>
            <Cell col={4}>
                <h2>Orders for :{sessionStorage.getItem("name")}</h2>

                </Cell>

                <Cell col={8}>
                    <div>
                        {this.state.orders.map(function (o) {
                            return (
                            <div>
                                    <Cell col={6}><h3>Order Request: {o.requestId}</h3></Cell>

                                    <Cell col={6}><Item orderId={o.requestId}></Item></Cell>
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
