

// action type 
export const ADD_MOVIE ='ADD_MOVIE';
export const ADD_TO_Favourite ='ADD_TO_Favourite';
export const REMOVE_FROM_Favourite='REMOVE_FROM_Favourite';
export const SET_SHOW_Favourite='SET_SHOW_Favourite';



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