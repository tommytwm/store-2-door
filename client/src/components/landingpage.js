import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

// using MDL similar to bootsrap
// inline style
//5ki

class Landing extends Component {
    
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="mdl-grid--no-spacing landing-grid">
                    <Cell className="mdl-grid--no-spacing"col={12} style={{ margin: 'auto', marginTop: '10em', width: '90%', position: 'center' }}>


                        <div style={{ marginTop: '10em' }}>
                            <h1 id="landing-title">Welcome to Store 2 Door</h1>
                            <h5>PLorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.</h5>

                            <Link style={{ color: '#2F2B0E', fontSize: '2em' }} to={process.env.PUBLIC_URL + "/signin"} >Log In or Sign Up</Link>
                        </div>
                        <br />
                    </Cell>
                    <p></p>
                </Grid>
            </div>
        )
    }
}

export default Landing;
