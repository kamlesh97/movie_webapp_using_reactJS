

// action type 
export const ADD_MOVIE ='ADD_MOVIE';
export const ADD_TO_Favourite ='ADD_TO_Favourite';
export const REMOVE_FROM_Favourite='REMOVE_FROM_Favourite';
export const SET_SHOW_Favourite='SET_SHOW_Favourite';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT='ADD_SEARCH_RESULT'

//action creater
export function addMovie(movies){
    return{
        type:ADD_MOVIE,
        movies
    }
}

export function addFavourite(movies){
    return{
        type:ADD_TO_Favourite,
        movies
    }
}


export function removeFromFavourite(movies){
    return{
        type:REMOVE_FROM_Favourite,
        movies
    }
}


export function setShowFavourite(val){
    return{
        type:SET_SHOW_Favourite,
        val
    }
}




export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    }

}


export function handleMovieSearch(movie){
    const url=`https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`
    return function(dispatch){
    fetch(url)
    .then(response=>response.json())
    .then(movie=>{console.log('movie',movie)
    dispatch(addMovieSearchResult(movie)) 
    })

    }
}

export function addMovieSearchResult(movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie
    }

}
