import { combineReducers } from 'redux'
import Cookies from 'js-cookie';

const user = (state = null, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      const {username, password} = action.value;
      Cookies.set('username', username)
      return {username: username};
    case 'LOGOUT_USER':
      Cookies.remove('username')
      return null;
    default:
      return state;
  }
}

const listings = (state = [], action) => {
  switch(action.type) {
    case 'ADD_LISTING':
      action.value.id = state.length + 1;
      return [...state, action.value];
    case 'REMOVE_LISTING':
      return state.filter(listing => listing.id != action.value);
    default:
      return state;
  }
}

export default combineReducers({ user, listings });