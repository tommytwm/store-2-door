import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

// fetch Item given ORDER REQUEST 
// show AVG rating
// show each rating and comments
// ability to rate the provider
class Ratings extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            ratings: []
        };
    }

    componentDidMount() {
       // fetch('/api/rating/' + this.props.orderId)
       //     .then(res => res.json())
       //     .then(ratings => this.setState({ ratings }, () => console.log('ratings fetched...', ratings)));
    }

    render() {
        return (
            <Grid className="demo-grid-ruler">

                <Cell col={12}>
                    <div>
                        <form>
                            <Cell col={8}>
                            <label for="comment">Comment:</label>

                            <input  type="text" id="comment" name="c" />

                            <select id="rate" name="r">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                             </select>
                            </Cell>
                            <div>
                                <button type="submit">Rate</button>
                            </div>
                        </form>

                    </div>

                </Cell>
            </Grid>
        )
    }
}

export default Ratings;
