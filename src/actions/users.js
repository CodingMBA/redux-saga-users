export const Types = {
  GET_USERS_REQUEST: 'users/get_users_request',
  GET_USERS_SUCCESS: 'users/get_users_success',
  USERS_ERROR: 'users/users_error'
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: {
    items
  }
});

export const usersError = ({ error }) => ({
  type: Types.USERS_ERROR,
  payload: {
    error
  }
});
