import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

// this class should query on providers and trips to stores 
// TODO: change fetch to use this.state.pId to fetch trips
class Providers extends Component { // props: pId
    constructor(props) {
        super(props);
        console.log(props.location.state.pId)
        this.state = {
            pId: props.location.state.pId,
            trips: []
        };
    }

    componentDidMount() {
        fetch('/api/example')// change this
            .then(res => res.json()) 
            .then(trips => this.setState({ trips }, () => console.log('trips fetched...', trips)));
    }

    render() {
        console.log(this.props.location.state.pId)
        if (this.props.location.state.pId == null)
            return (
                <Grid>
                    <div>hi</div>
                </Grid>
            )
        return (
            <Grid>
                <Cell col={4}>
                    <div>{this.props.location.state.pId}</div>

                </Cell>

                <Cell col={12}>
                    <div>
                        Trips:
                        {this.state.trips.map(function (s) {
                        return (
                            <Link key={s.uid} to={{ pathname: '/items', state: { storeId: s.uid } }}>{s.name}</Link> // TODO: change to stores
                        )
                    }, this)}

                    </div>

                </Cell>
            </Grid>
        )
    }
}

export default Providers;
