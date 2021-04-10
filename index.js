const redux = require('redux')
const reduxLogger = require('redux-logger')


const createStore = redux.createStore
const combineReducer = redux.combineReducers
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM"

const intialCakeState = {
  numberOfCakes: 10
};
const intialIceCreamState = {
  noOfIcecream:20
};


// action creator for cake 
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}
// action creator for icecream

function buyIceCream() {
    return {
      type: BUY_ICECREAM
    };
  }
const cakeReducer = (state = intialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,

        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state
  }
};
const iceCreamReducer = (state = intialIceCreamState, action) => {
  
    switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,

        noOfIcecream: state.noOfIcecream - 1,
      };

    default:
      return state
  }
};
const rootReducer = combineReducer({     // creating Combine reducer
    cake:cakeReducer,
    iceCream:iceCreamReducer


})
const store = createStore(rootReducer,applyMiddleware(logger)); // creation of redux store and adding combine reducer to store.store holding the state of the application
console.log('ititial state  ',store.getState()) // store allow access to state via getState() method 
const unsubscribe = store.subscribe(()=>{})
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
console.log("hello")
unsubscribe()