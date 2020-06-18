import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            currentProvider: null,
            currentReceiver: null,
            name: '',
            email: ''
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

    handleUpdate() {
        fetch('/api/user/edit', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    uid: this.state.currentUser.uid,
                    name: this.state.name,
                    geoLocId: this.state.currentUser.geoLocId,
                    email: this.state.email
                }
            )
          })
        .then(res => res.json())
        .then((json) => {
            console.log('User updated to ' + json);
        });
    }

    componentDidMount() {
        const currentUserId = sessionStorage.getItem('uId');

        if (currentUserId !== null) {
            fetch('/api/user/' + currentUserId)
                .then(res => res.json())
                .then((currentRetrievedUser) => {
                    const currentUserJson = currentRetrievedUser[0];
                    this.setState({currentUser: currentUserJson});
                    this.setState({name: currentUserJson.name});
                    this.setState({email: currentUserJson.email});
                });
            fetch('/api/provider/' + currentUserId)
                .then(res => res.json())
                .then((currentRetrievedProvider) => {
                    const currentProviderJson = currentRetrievedProvider[0];
                    this.setState({currentProvider: currentProviderJson});
                });
            fetch('/api/receiver/' + currentUserId)
                .then(res => res.json())
                .then((currentRetrievedReceiver) => {
                    const currentReceiverJson = currentRetrievedReceiver[0];
                    this.setState({currentReceiver: currentRetrievedReceiver});
                });
        }
    }
    
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="mdl-grid--no-spacing landing-grid">
                    <Cell className="mdl-grid--no-spacing"col={12} style={{ margin: 'auto', marginTop: '10em', width: '90%', position: 'left' }}>
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
                            <br />
                            <br />
                            <label>
                                Stats for Nerds:
                                <br />
                                <text>Number of Orders: {this.state.currentReceiver ? this.state.currentReceiver.numOrders : 0}</text>
                                <br />
                                <text>Number of Deliveries: {this.state.currentProvider ? this.state.currentProvider.numDeliveries : 0}</text>
                            </label>
                        </form>
                        <br />
                        <button onClick={() => this.handleUpdate()}>Update</button>
                        </div>
                        <br />
                    </Cell>
                    <p></p>
                </Grid>
            </div>
        )
    }
}

export default UserProfile;
