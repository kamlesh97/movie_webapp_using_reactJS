import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import thunk from 'redux-thunk';

// const logger=function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log('ACTION_TYPE-', action.type);
//       next(action);
//     }
//   }
// }


const logger=({dispatch,getState})=>(next)=>(action)=>{
  // console.log('ACTION_TYPE-', action.type);
      next(action);
}

// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action==='function'){
//     action(dispatch);
//     return
//   }
//   next(action);
// }

const store=createStore(rootReducer, applyMiddleware(logger,thunk))
// // console.log(store);
// console.log('state', store.getState());

// export const StoreContext = createContext();

// console.log('StoreContext', StoreContext);

// class Provider extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <StoreContext.Provider value={store}>
//         {this.props.children}
//       </StoreContext.Provider>
//     );
//   }
// }

// const connectedComponent = connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBeSentAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }

// update store by dispatching actions
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: moviesList
// });
// console.log('state', store.getState());


ReactDOM.render(
 <Provider store={store}><App store={store}/></Provider>
  ,
  document.getElementById('root')
);

 