const redux = require('redux')
const createStore= redux.createStore

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

const FETCH_USERS_SUCCESS = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const FETCH_USERS_FAILURE = (errors) => {
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


// Creation of Store:

const store = createStore(reducer)
