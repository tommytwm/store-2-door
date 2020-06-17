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
            ratings: [],
            comment: '',
            rate: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("/api/rating/user/" +this.props.userId)
            .then(res => res.json())
            .then(ratings => this.setState({ ratings }, () => console.log('ratings fetched...', ratings)));
    } 


    handleSubmit(event) { // create the order request then.. ^
        event.preventDefault();
        console.log(this.state.comment + "comment")
        console.log(this.state.rate + "rate")
        fetch('/api/rating/' + this.props.userId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                rate: this.state.rate,
                comment: this.state.comment
            })
        })
            .then(response => response.json())
            .then(data => console.log(data + 'created data'))
    }

    handleChange(event) {
        this.setState({ comment: event.target.value });
        console.log(this.state.comment +"comment")
    }
    handleRateChange(event) {
        this.setState({ rate: event.target.value });
        console.log(this.state.rate + "rate")
    }

    render() {
        return (
            <Grid className="demo-grid-ruler">

                <Cell col={12}>
                    <div>

                        {this.state.ratings.map(r =>
                            <div>
                                <h5>{r.rate}</h5>
                                <div>{r.comment}</div>
                            </div>
                        )}
                        <br/>
                        <form onSubmit={this.handleSubmit}>
                            <Cell col={8}>
                            <label htmlFor="comment">Comment:</label>

                                <input type="text" onChange={this.handleChange}  id="comment" name="c" />

                                <select id="rate" name="r"  onChange={this.handleRateChange}>
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
