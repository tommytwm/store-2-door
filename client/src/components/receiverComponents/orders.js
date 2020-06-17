import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Item from './item';
import OrderInformation from './orderinformation';
import '../../App.css';


// show ORDER ID: item 1,2,3.... total price: xxx
class Orders extends Component { // props: pId
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        fetch('api/orderRequest/receiver/' + sessionStorage.getItem('uId'))
            .then(res => res.json())
            .then(orders => this.setState({ orders }, () => console.log('orders fetched...', orders)));
    }
    


    render() {
        console.log(this.state.orders)
    return (
            <Grid>
            <Cell col={4}>
                <h2>Orders for: {sessionStorage.getItem("name")}</h2>

                </Cell>

                <Cell col={8}>
                    <div>
                        {this.state.orders.map(function (o) {
                            return (
                            <div className="header-color">
                                    <Cell col={6}><h3>Order Request: {o.requestId}</h3>
                                        <OrderInformation requestId={o.requestId} />
                                        <h3>The total for this order is: ${Math.round((o.totalprice + Number.EPSILON) * 100) / 100}</h3>
                                    </Cell>

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
