const redux = require("redux");

const INITIAL_VALUE = {
  counter: 0
}


// reducer function
const reducer = (store = INITIAL_VALUE, action)=> {

  console.log("Reducer called", action);

  let newStore = store;

  if(action.type === "INCREMENT") {
    newStore = {counter: store.counter + 1}
  } else if(action.type === "DECREMENT"){
    newStore = {counter: store.counter - 1 }
  } else if(action.type === "ADDITION") {
    newStore = {counter: store.counter + action.payload.number};
  }
  return newStore;

}    


// Creating Store
// redux.createStore(reducer) // Depricated
const store = redux.createStore(reducer);


// Creating subscriber

const subscriber = () => {

  // When only current state is needed(no subscription)
  const state = store.getState();
  console.log(state);
  
}
  // When state is needed with subscrition
store.subscribe(subscriber);

// Creating dispatch to send action

store.dispatch({type : 'INCREMENT'});
store.dispatch({type : 'DECREMENT'});
store.dispatch({type : 'INCREMENT'});
store.dispatch({type : 'ADDITION', payload: {number: 7}});
store.dispatch({type : 'DECREMENT'});






































