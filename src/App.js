import React from 'react'
import Navbar from './components/Navbar'
import {data} from './components/data'
import {addMovie, setShowFavourite} from './actions/index'
import Moviecard from './components/Moviecard'


class App extends React.Component {

  componentDidMount(){
    const {store}=this.props

    store.subscribe(()=>{
      console.log('updated')
      this.forceUpdate()
    
    })

    store.dispatch(
      addMovie(data)
    )

    console.log('state-',this.props.store.getState())
  }

  isMovieFavourite=(movie)=>{
    const {movies}=this.props.store.getState();
    const index=movies.favourites.indexOf(movie)

  
    if(index!==-1){
      return true
    }
  return false

}

onChangeTab=(val)=>{
  this.props.store.dispatch(setShowFavourite(val))
}  
  render(){
    console.log('render-',this.props.store.getState())
  const {movies}=this.props.store.getState()
  const {list, favourites, showFavourites }=movies

  const displayMovie=showFavourites?favourites:list;
  return (
    <div className="App">
      <Navbar/>
      <div className='main'>
        <div className='tabs'>
          <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>movie</div>
          <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}>favourite</div>
        </div>

        <div className='list'>
          {displayMovie.map((movie,index)=>(
          <Moviecard movie={movie} key={`movie-${index}`} dispatch={this.props.store.dispatch}
          isFavourite={this.isMovieFavourite(movie)}
          />
          ))}
        </div>
        {displayMovie.length===0?<div className='no-movies'>there is no favourite movie</div>:null}


      </div>
 
    </div>
  );
          }
}

export default App;
