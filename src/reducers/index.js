import {combineReducers} from 'redux';
import {ADD_MOVIE, ADD_SEARCH_RESULT, ADD_TO_Favourite, REMOVE_FROM_Favourite, SET_SHOW_Favourite,
ADD_MOVIE_TO_LIST
} from '../actions'

 
const initialMovieState={
    list:[],
    favourites:[],
    showFavourites:false,
}

export function movies(state=initialMovieState,action){
    switch (action.type){
        case ADD_MOVIE:
            return {
                    ...state,
                    list:action.movies
                }
        case ADD_TO_Favourite:
            return{
                ...state,
                favourites:[action.movies,...state.favourites]
            }
        
        case REMOVE_FROM_Favourite:
            const filteredArray=state.favourites.filter(movie=>movie.Title!==action.movie.Title)
            return{
                ...state,
                favourites:filteredArray
            }
        case SET_SHOW_Favourite:
            return{
                ...state,
                showFavourites:action.val 
            }  
            
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
                list:[action.movie,...state.list]
            }    

        default:
            
                return state
                

    }



}





const initialSearchState={
    result:{},
    showSearchResults:false,
}
export function search(state=initialSearchState,action){
    // ADD_SEARCH_RESULT
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return{
                ...state,
                result:action.movie,
                showSearchResults:true,
            }
        default:return state

    }
     
}


// const initialRootState={
//     movies:initialMovieState,
//     search:initialSearchState,
// }

// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }



export default combineReducers({
    movies,
    search
});