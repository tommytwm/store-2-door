import React, { Component } from 'react';

class TestApi extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        fetch('/api/example')
            .then(res => res.json())
            .then(customers => this.setState({ customers }, () => console.log('Customers fetched...', customers)));
    }

    render() {
        return (
            <div>
                <h2>HEllo</h2>
                <ul>
                    {
                        this.state.customers.map(customer =>
                            <li key={customer.id}>{customer.email} author: {customer.name}</li>
                        )}
                </ul>
            </div>
        );
    }
}

export default TestApi;
