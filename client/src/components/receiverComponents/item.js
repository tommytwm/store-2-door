import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

// fetch Item given ORDER REQUEST 
class Item extends Component { // props: pId
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        fetch('/api/providerGoesTo/' + this.state.pId)// change this
            .then(res => res.json())
            .then(trips => this.setState({ trips }, () => console.log('trips fetched...', trips)));
    }

    render() {
        return (
            <Grid>

                <Cell col={12}>
                    <div>
                        Trips:
                        {this.state.orders.map(function (o) {
                        return (
                            <Link key={o.uid} to={{ pathname: '/items', state: { storeId: t.storeId, providerId: this.state.pId } }}>{t.storeId}</Link>
                        )
                    }, this)}

                    </div>

                </Cell>
            </Grid>
        )
    }
}

export default Item;
