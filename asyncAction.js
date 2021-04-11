const redux = require('redux');
const createStore= redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const intialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// three action Creators

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (errors) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// creating reducer

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case fetchUsersRequest:
      return {
        ...state,

        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {

        loading: false,
        users: action.payload,
        error: "",
        
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

const fetchUsers = ()=> {

    return function(dispatch) {

        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{

            const users = response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))

        })
        .catch(error=>{

            dispatch(fetchUsersFailure(error.message))


        })
    }
}


// Creation of Store:

const store = createStore(reducer,applyMiddleware(thunkMiddleware))

store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers)
