import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

// fetch Item given ORDER REQUEST 
class Item extends Component { // props: pId
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        fetch('/api/containsItem/' + this.props.orderId)// change this
            .then(res => res.json())
            .then(orders => this.setState({ orders }, () => console.log('items fetched...', orders)));
    }

    render() {
        return (
            <Grid>

                <Cell col={12}>
                    <div>
                        <h3>Items:</h3>
                        {this.state.orders.map(function (o) {
                        return (
                            <div>{o.name}</div>
                        )
                    }, this)}

                    </div>

                </Cell>
            </Grid>
        )
    }
}

export default Item;
