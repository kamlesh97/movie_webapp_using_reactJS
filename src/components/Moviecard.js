import React, { Component } from 'react'
import { addFavourite } from '../actions';

export class Moviecard extends Component {


    handleFavouriteClick=()=>{
        const {movie}=this.props;

        this.props.dispatch(addFavourite(movie))
    }

    handleUnFavouriteClick=()=>{

    } 
    render() {
        const {movie,isFavourite}=this.props
        return (
            <div className='movie-card'>
                <div className='left'>
                    <img src={movie.Poster} alt='movie-poster' />
                </div>
                <div className='right'>
                    <div className='title'>{movie.Title}</div>
                    <div className='plot'>{movie.Plot}</div>
                    <div className='footer'>
                    <div className='rating'>{movie.imdbRating}</div>

                    {
                        isFavourite?<button className='unfavourite-btn' onClick={this.handleUnFavouriteClick} >unfavourite</button>:
                        <button className='favourite-btn' onClick={this.handleFavouriteClick} >favourite</button>
                    }
                    
                </div>
                </div>
            </div>
        )
    }
}

export default Moviecard
