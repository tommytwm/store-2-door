import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Items extends Component {
    render() {
        console.log(this.props.location.state.storeId)
        if (this.props.location.state.storeId == null)
            return (
                <Grid>
                    <div>hi</div>
                </Grid>
            )
        return (
            <Grid>
                <Cell col={4}>
                    <div>{this.props.location.state.storeId}</div>

                </Cell>

                <Cell col={12}>
                    <div>current shopping cart:</div>

                </Cell>
            </Grid>
        )
    }
}

export default Items;
