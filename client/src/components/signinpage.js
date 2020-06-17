import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isAuth: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value  
        });
    }

    handleLogIn() {
        fetch('/api/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    name: this.state.name,
                    email: this.state.email
                }
            )
          })
        .then(res => res.json())
        .then((json) => {
            if (json.length === 1) {
                this.setState({isAuth: true});
                console.log('Logged in...');
                console.log('Welcome ' + json[0].name + '!');
            }
        });
    }

    handleSignUp() {
        fetch('/api/user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    uid: 60,
                    name: this.state.name,
                    geoLocId: 1,
                    email: this.state.email
                }
            )
          })
        .then(res => res.json())
        .then((json) => {
            this.setState({isAuth: true});
        });
    }
    
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="mdl-grid--no-spacing landing-grid">
                    <Cell className="mdl-grid--no-spacing"col={12} style={{ margin: 'auto', marginTop: '10em', width: '90%', position: 'center' }}>
                        <div style={{ marginTop: '10em' }}>
                        <form>
                            <label>
                                Name: 
                                <input
                                    name="name"
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleInputChange} 
                                />
                            </label>
                            <br />
                            <br />
                            <label>
                                Email: 
                                <input
                                    name="email"
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleInputChange} 
                                />
                            </label>
                        </form>
                        <br />
                        <button onClick={() => this.handleLogIn()}>Sign In!</button>
                        <br />
                        <button onClick={() => this.handleSignUp()}>Sign Up!</button>
                        <Redirect to={this.state.isAuth ? "/home" : "/signin"}/>
                        </div>
                        <br />
                    </Cell>
                    <p></p>
                </Grid>
            </div>
        )
    }
}

export default SignIn;
