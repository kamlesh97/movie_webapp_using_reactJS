import {combineReducers} from 'redux';
import {ADD_MOVIE, ADD_TO_Favourite, REMOVE_FROM_Favourite, SET_SHOW_Favourite} from '../actions'

 
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

        default:
            
                return state
                

    }



}





const initialSearchState={
    result:{}
}
export function search(state=initialSearchState,action){
        return state
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