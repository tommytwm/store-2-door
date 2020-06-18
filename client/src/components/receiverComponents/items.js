import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

// TODO: double check on adding items to contains, send this to the provider acceptsRequest too 
class Items extends Component {
    
    constructor(props) {
        super(props);
        this.dict = {};
        this.state = {
            items: [],
            store: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }
    

    componentDidMount() {
        fetch('/api/item/by-store/' + this.props.location.state.storeId)
            .then(res => res.json()) 
            .then(items => this.setState({ items }, () => console.log('items fetched...', items)));
        fetch('/api/store/' + this.props.location.state.storeId)
            .then(res => res.json()) 
            .then(r => r[0])
            .then(store => this.setState({ store }, () => console.log('store fetched...', store)));
    }

    createNewItemsForOrder(oId) { // this will add items to the created order request
        for (var key in this.dict) {
            if (this.dict.hasOwnProperty(key)) {
                fetch('/api/containsItem', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        requestId: oId,
                        itemId: key
                    })
                })
                .then(response => response.json())
                .then(data => console.log("added " + data + key + "for" + oId))
            }
        }
        alert("Added Items To Order ID" + oId)
    }

    handleSubmit(event) { // create the order request then.. ^
        event.preventDefault();
        fetch('/api/orderRequest/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                receiverId: sessionStorage.getItem('uId')
            })
        })
            .then(response => response.json())
            .then(data => this.createNewItemsForOrder(data))


    }
    onSelect(event) {
        console.log(event.target.checked)
        if (event.target.checked) {
            this.dict[event.target.value]= event.target.name

        }
        else {
            delete this.dict[event.target.value]
        }

    }


    render() {
        if (this.props.location.state.storeId === undefined)
            return (
                <Grid>
                    <Link to={{ pathname: '/shop' }}>Please Choose A Valid Store</Link> 
                </Grid>
            )
        return (

            <Grid>
                <Cell col={4}>
                    <div><h1>{this.state.store.name}</h1>
                        {this.props.location.state.providerId !== undefined ? <h3>Please create an order request for provider: {this.props.location.state.providerId}</h3>: null}
                    </div>

                </Cell>
                    <Cell col={8}>
                        <div className="floating-div">
                        <ul style={{ listStyle: 'none' }}>
                            <form onSubmit={this.handleSubmit}>
                                {this.state.items.map((item,i) =>
                                    <li key={i}>
                                        <div>
                                            <input onChange={this.onSelect}type="checkbox" id={item.itemId} name={item.name} value={item.itemId} />
                                            <label htmlFor={item.itemId}>{item.name}</label>
                                            <h3>${item.price}</h3>
                                        </div>
                                    </li> 
                                    )}
                                    <div>
                                        <button type="submit">Create New Order</button>
                                    </div>
                            </form>
                            </ul>

                        </div>
                    </Cell>
                        
                  
            </Grid>
        )
    }
}

export default Items;
