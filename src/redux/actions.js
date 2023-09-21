export const loginUser = (credentials) => {
  return {
    type: 'LOGIN_USER',
    value: credentials
  }
};

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER',
    value: null
  }
};

export const addListing = (listing) => {
  return {
    type: 'ADD_LISTING',
    value: listing
  }
};


export const removeListing = (id) => {
  return {
    type: 'REMOVE_LISTING',
    value: id
  }
};
