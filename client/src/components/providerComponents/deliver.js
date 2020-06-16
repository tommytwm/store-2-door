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
                        <div className="resume-personal-info" style={{ color: '#E3DFBF' }} >
                            <div style={{ textAlign: 'center' }}>
                            </div>
                            <h4 >Nearby Providers</h4>
                            <div className="floating-div">
                                <ul styel={{ listStyle: 'none' }}>
                                    {
                                        this.state.customers.map(customer =>
                                            <li key={customer.adminId}>{customer.name} </li>
                                        )}
                                </ul>

                                <h5 >
                                    Year 3
              </h5>
                                <hr style={{ borderTop: '3px solid #CCC8AB', width: '75%', marginLeft: 'auto', marginRight: 'auto' }} />
                                <h5>Phone</h5>
                                <h5>Email</h5>
                                <hr style={{ borderTop: '3px solid #CCC8AB', width: '75%', marginLeft: 'auto', marginRight: 'auto' }} />
                                <h2>Skills</h2>
                                <h5>Languages And Technologies</h5>
                                <p>Java, C++, JavaScript, React, Python, NodeJS*, Express*, HTML/ CSS</p>
                                <h5>Tools</h5>
                                <p>Git, Perforce, Jira</p>
                                <h5>Databases</h5>
                                <p>MySQL, PostgreSQL, JDBC, ODBC</p>
                                <p>*Currently learning</p>
                            </div>
                        </div>
                    </Cell>
                    <div className="mdl-layout-spacer"></div>
                    <Cell className="resume-right-col" col={8}>


                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Deliver;
