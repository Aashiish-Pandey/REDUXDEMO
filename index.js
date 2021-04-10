const BUY_CAKE = "BUY_CAKE";
const redux = require('redux')
const createStore = redux.createStore

const intialState = {
  numberOfCakes: 10,
};


// action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action",
  };
}
const reducer = (state = intialState, action) => {
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

const store = createStore(reducer); // creation of redux store ,store holding the state of the application
console.log('ititial state  ',store.getState()) // store allow access to state via getState() method 
const unsubscribe = store.subscribe(()=>console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
console.log("hello")
unsubscribe()