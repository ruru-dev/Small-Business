import { combineReducers } from 'redux'

const user = (state = null, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
      const {email, password} = action.value;
      return { email: email}
    default:
      return state;
  }
}

const listings = (state = [], action) => {
  switch(action.type) {
    case 'REMOVE_LISTING':
      return state.filter(listing => listing.id != action.value);
    default:
      return state;
  }
}

export default combineReducers({ user, listings });