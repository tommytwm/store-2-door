import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';


class Items extends Component {
    constructor(props) {
        super(props);
        console.log(props.location.state.storeId)
        this.state = {
            storeId: props.location.state.storeId,
            items: [],
            store: []
        };
    }

    componentDidMount() {
        fetch('/api/item/' + this.state.storeId)
            .then(res => res.json()) 
            .then(items => this.setState({ items }, () => console.log('items fetched...', items)));
        fetch('/api/store/' + this.state.storeId)
            .then(res => res.json()) 
            .then(r => r[0])
            .then(store => this.setState({ store }, () => console.log('store fetched...', store)));
    }

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target.value;
        console.log(form)
        const data = new FormData(form);
        console.log(data)
        for (let name of data.keys()) {
            const input = form.elements[name];
            const parserName = input;
            console.log(parserName)

        }
    }

    render() {
        console.log(this.state.store+ "store")
        if (this.props.location.state.storeId == null)
            return (
                <Grid>
                    <Link to={{ pathname: '/shop' }}>Please Choose A Valid Store</Link> 
                </Grid>
            )
        return (

            <Grid>
                <Cell col={4}>
                    <div><h1>{this.state.store.name}</h1></div>

                </Cell>
                    <Cell col={8}>
                        <div className="floating-div">
                        <ul style={{ listStyle: 'none' }}>
                            <form onSubmit={this.handleSubmit}>
                                {this.state.items.map(item =>
                                    <li key={item.itemId}>

                                        <input type="checkbox" id="buyItem" name="subscribe" value={item.itemId} />
                                        <label htmlFor="buyItem">{item.name}</label>
                                        <h3>{item.price}</h3>
                                    </li> 
                                    )}
                                    <div>
                                        <button type="submit">Add Items To Order</button>
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
