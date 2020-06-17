import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

// this class should deal with accepting delivery requests 
// and also setting new future trips to stores

// TODO: add functionality to see order requests and the items that come with it 
class Deliver extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        fetch('/api/example')
            .then(res => res.json()) // without this, it is empty
            .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
    }


    render() {
        return (
            <div className='landing-grid' style={{ fontFamily: 'Roboto Mono' }}>
                <Grid style={{ paddingTop: '10em' }}>
                    <div className="mdl-layout-spacer"></div>
                    <Cell col={4} style={{ background: 'rgba(47,43,14,0.65)' }}>


                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Deliver;
