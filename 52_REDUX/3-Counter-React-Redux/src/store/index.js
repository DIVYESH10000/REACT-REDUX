// Step 1: npm install @reduxjs/toolkit
// Step-2: Remove redux from package.json
// Step-3: import {createSlice} from "@reduxjs/toolkit"
// Step-4: Slice of store can be created using following syntax
// Step-5: 
// Step-6: 


import {configureStore} from "@reduxjs/toolkit";
import  counterSlice  from "./counter";
import privacySlice from "./privacy";




// Store object created
const counterStore = configureStore({reducer:{
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  }});


export default counterStore;





/*

const INITIAL_VALUE = {counter: 0,
  privacy: false,
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  
  if(action.type === "INCREMENT"){
    return  {...store, counter: store.counter + 1};
    
  } else if(action.type === "DECREMENT"){
    return  {...store, counter: store.counter - 1, privacy: store.privacy};
  } else if(action.type === "ADD") {
    return {...store, counter: store.counter + Number(action.payload.num)};
  } else if(action.type === "SUBTRACT") {
    return {...store, counter: store.counter - Number(action.payload.num)};
  } else if(action.type === "PRIVACY_TOGGLE"){
    return {privacy: !store.privacy };
    
  }
  return store;
}
*/