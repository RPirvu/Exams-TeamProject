import React, { Component } from 'react';
import './MovieTile.css';

/*
 * Movie.
 */
class MovieTile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='movieTile'>
                <div className='movieTile__title'>
                    {this.props.title}
                </div>
                <div className='movieTile__infos'>
                    <div className='movieTile__releaseCountry'>
                        {this.props.releaseCountry}
                    </div>
                    <div className='movieTile__releaseYear'>
                        {this.props.releaseYear}
                    </div>
                </div>
            </div>
        );
    }
};

export default MovieTile;
