import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

// this class should deal with accepting delivery requests 
// and also setting new future trips to stores

// TODO: add functionality to see order requests and the items that come with it 
class Deliver extends Component {
    constructor() {
        super();
        this.state = {
            requests: []
        };
    }

    componentDidMount() {
        fetch('/api/acceptRequest/' + sessionStorage.getItem('uId'))
            .then(res => res.json())
            .then(requests => this.setState({ requests }, () => console.log('Requests fetched...', requests)));
    }

    render() {
        return (
            <div className='landing-grid' style={{ fontFamily: 'Roboto Mono' }}>
                <Grid style={{ paddingTop: '10em' }}>
                    <Cell col={4} style={{ background: 'rgba(47,43,14,0.65)' }}>
                        <div style={{ color: '#E3DFBF', textAlign: 'center' }} >
                            <div style={{ textAlign: 'center' }}>
                            </div>
                            <h4 >Nearby Request to Accept</h4>
                            <h6>Click To See Order Details</h6>
                            <div className="floating-div">
                                <ul style={{ listStyle: 'none' }}>
                                    {this.state.requests.map((request) => {
                                            if (request.isAccepted === 0) {
                                                return (<li key={request.requestId}>
                                                            <Link key={request.requestId} to={{ pathname: '/request', state: { request: request } }}>{request.requestId}</Link>
                                                        </li>);
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </Cell>

                    <div className="mdl-layout-spacer"></div>
                    
                    <Cell col={4} style={{ background: 'rgba(47,43,14,0.65)' }}>
                        <div style={{ color: '#E3DFBF', textAlign: 'center' }} >
                            <div style={{ textAlign: 'center' }}>
                            </div>
                            <h4 >Accepted Requests To Deliver</h4>
                            <h6>Click To See Order Details</h6>
                            <div className="floating-div">
                                <ul style={{ listStyle: 'none' }}>
                                    {this.state.requests.map((request) => {
                                            if (request.isAccepted === 1) {
                                                return (<li key={request.requestId}>
                                                            <Link key={request.requestId} to={{ pathname: '/request', state: { request: request } }}>{request.requestId}</Link>
                                                        </li>);
                                            }
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Deliver;
