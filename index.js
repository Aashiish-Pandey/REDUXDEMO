const redux = require('redux')
const createStore = redux.createStore
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM"

const intialState = {
  numberOfCakes: 10,
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
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,

        numberOfCakes: state.numberOfCakes - 1,
      };

      case BUY_ICECREAM:
      return {
        ...state,

        noOfIcecream: state.noOfIcecream - 1,
      };

    default:
      return state
  }
};

const store = createStore(reducer); // creation of redux store ,store holding the state of the application
console.log('ititial state  ',store.getState()) // store allow access to state via getState() method 
const unsubscribe = store.subscribe(()=>console.log('Updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
console.log("hello")
unsubscribe()