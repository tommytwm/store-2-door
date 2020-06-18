import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import '../../App.css';
import { Link } from 'react-router-dom';

// fetch Item given ORDER REQUEST 

class OrderInformation extends Component { // props: pId
    constructor(props) {
        super(props);
        this.state = {
            requests: []
        };
    }

    componentDidMount() {
        fetch('api/acceptRequest/request/' + this.props.requestId)// change this
            .then(res => res.json())
            .then(requests => this.setState({ requests }, () => console.log('requests fetched...', requests)));
    }

    getProvider(uid, name) {
        return (
            <Link key={uid} to={{ pathname: '/providers', state: { pId: uid, name: name } }}>{name}</Link>
            
            )

    }

    render() {
        console.log(this.state.requests)
        return (
            <Grid>

                <Cell col={12}>
                    <div>
                        {this.state.requests.length > 1 ? <h1>This Request Is Still Pending</h1> :
                            <h5>This Request has been Accepted by: {this.state.requests[0] != undefined ?
                                this.getProvider(this.state.requests[0].providerId, this.state.requests[0].name) : null}</h5>}

                    </div>

                </Cell>
            </Grid>
        )
    }
}

export default OrderInformation;
