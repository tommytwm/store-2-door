import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: props.location.state.request,
            items: []
        };
    }

    handleProviderAcceptOrder() {
        const requestId = this.state.request.requestId;
        const providerId = this.state.request.providerId;

        fetch('/api/acceptRequest/' + requestId + '/' + providerId, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(res => res.json())
        .then((json) => { 
            console.log('Accepted the order...', requestId);
            // TODO: REDIRECTION TO THE DELIVER PAGE
        });
    }

    handleAcceptOrder() {
        const requestId = this.state.request.requestId;
        const providerId = this.state.request.providerId;

        fetch('/api/acceptRequest/remove-request/' + requestId + '/' + providerId, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
        .then(res => res.json())
        .then((json) => {
            this.handleProviderAcceptOrder();
        });
    }

    componentDidMount() {
        fetch('/api/containsItem/' + this.state.request.requestId)
            .then(res => res.json())
            .then(items => this.setState({ items }, () => console.log('Items fetched...', items)));
    }

    render() {
        if (this.state.request == null)
            return (
                <Grid>
                    <div>An error occured</div>
                </Grid>
            )

        if (this.state.request.isAccepted == 0) {
            return (
                <Grid>
                    <Cell col={4}>
                        <h2>Items:</h2>
                        <ul style={{ listStyle: 'none' }}>
                            {this.state.items.map((item) =>
                                <li>{item.name}</li>
                            )}
                            <div>
                                <button onClick={() => this.handleAcceptOrder()}>Accept Order Request</button>
                            </div>
                        </ul>
                    </Cell>
                </Grid>
            )
        }
        else {
            return (
                <Grid>
                    <Cell col={4}>
                        <h2>Items:</h2>
                        <ul style={{ listStyle: 'none' }}>
                            {this.state.items.map((item) =>
                                <li>{item.name}</li>
                            )}
                        </ul>
                    </Cell>
                </Grid>
            )
        }
    }
}

export default Request;
