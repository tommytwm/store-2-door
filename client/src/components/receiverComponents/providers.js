import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import Ratings from '../ratings';

// this class should query on providers and trips to stores 

// PROVIDER props should be provider ID
// FUTURE IMPLEMENTATION: ability to filter out any trips that are in the past
class Providers extends Component { // props: pId
    constructor(props) {
        super(props);
        this.state = {
            pId: props.location.state.pId,
            trips: [],
            store: {}
        };
    }

    componentDidMount() {
        fetch('/api/providerGoesTo/'+ this.state.pId)// change this
            .then(res => res.json()) 
            .then(trips => this.setState({ trips }, () => console.log('trips fetched...', trips)));
    }

    render() {
        console.log(this.state.pId + "ID")
        console.log(this.props.location.state.pId)
        if (this.props.location.state.pId == null)
            return (
                <Grid>
                    <div>hi</div>
                </Grid>
            )
        return (

            <Grid className="demo-grid-ruler">
                <Cell col={4}>
                    <h1>{this.props.location.state.name}</h1>
                    <Cell col={12}><Ratings userId={this.state.pId} /></Cell>
                </Cell>

                <Cell col={8}>
                    <div>
                        <h3>Trips:</h3>
                        <h5>Click On The Following Trips To Request An Order</h5>
                        {this.state.trips.map(function (t) {
                        return (
                            <Link key={t.uid} to={{ pathname: '/items', state: { storeId: t.storeId, providerId: this.props.location.state.name } }}>{t.name}</Link> 
                        )
                    }, this)}

                    </div>

                </Cell>
            </Grid>
        )
    }
}

export default Providers;
