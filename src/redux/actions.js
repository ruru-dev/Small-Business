export const loginUser = (credentials) => {
  return {
    type: 'LOGIN_USER',
    value: credentials
  }
};

export const removeListing = (id) => {
  return {
    type: 'REMOVE_LISTING',
    value: id
  }
};
