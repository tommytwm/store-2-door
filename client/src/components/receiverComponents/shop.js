import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
import '../../App.css';


// this class should display any nearby users along with stores to select from
// user scenario: click the nearby provider, it should take you to a new page that displays the providers trip and the store they're going to 
        // given the provider and store, it should take you to the items page where items can be selected and added to the cart

// user scenario 2: click on store, it will bring you to items page, then can add items to orderRequest
// BUG: won't show providers if they have no rating

// TODO: show AVG of the providers
class Shop extends Component {
    constructor() {
        super();
        this.state = {
            providers: [],
            stores:[]
        };
    }

    componentDidMount() {
        fetch('/api/provider/profiles/')
            .then(res => res.json())
            .then(providers => this.setState({ providers }, () => console.log('providers fetched...', providers)));
        fetch('api/store/') 
            .then(res => res.json()) 
            .then(stores => this.setState({ stores }, () => console.log('stores fetched...', stores)));
    }

           
    render() {
        return (

            <div className='landing-grid' style={{ fontFamily: 'Roboto Mono' }}>
                <Grid style={{ paddingTop: '10em' }}>
                    <div className="mdl-layout-spacer"></div>
                    <Cell col={4} style={{ background: 'rgba(47,43,14,0.65)' }}>
                        <div style={{ color: '#E3DFBF', textAlign: 'center' }} >
                            <div style={{ textAlign: 'center' }}>
                            </div>
                            <h4 >Nearby Providers</h4>
                            <h6>Click To See Upcoming Provider Trips</h6>
                            <div className="floating-div">
                                <ul style={{ listStyle: 'none' }}>
                                    {this.state.providers.map(provider =>
                                        <li key={provider.uid}>
                                            <h5>Average Rating: {Math.round((provider.avgrate + Number.EPSILON) * 100) / 100}</h5><Link key={provider.uid} to={{ pathname: '/providers', state: { pId: provider.uid, name: provider.name } }}>{provider.name}</Link>
                                        </li> 
                                        )}
                                </ul>

                            </div>
                        </div>
                    </Cell>
                    <div className="mdl-layout-spacer"></div>
                    <Cell style={{background: '#C8C4A7', color: 'white', textAlign: 'left', padding: '2em'}} col={8}>

                    <div>
                        <h3>Available Stores</h3>
                        <Grid className="demo-grid-3">

                            {this.state.stores.map(function (s, i) {
                                return (
                                    <Cell key= { i } className= "mdl-cell--4-col" col={4}>
                                        <Link key={i} to={{ pathname: '/items', state: { storeId: s.storeId } }}>{s.name}</Link> 
                                    </Cell>
                                )
                            }, this)}
                        </Grid>

                    </div>
                        

                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Shop;
