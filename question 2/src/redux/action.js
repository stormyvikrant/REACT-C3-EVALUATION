export const actionTypes = {
  ADD_USER_REQUEST:"ADD_USER_REQUEST",
  ADD_USER_SUCCESS:"ADD_USER_SUCCESS",
  ADD_USER_FAILURE:"ADD_USER_FAILURE",
};

export const addUserRequest = () => {;
return{
  type:actionTypes.ADD_USER_REQUEST
}
};
export const addUserSuccess = (data) => {
  return{
    type:actionTypes.ADD_USER_SUCCESS,
    payload:data
  }
  };

export const addUserFailure = () => {
return{
  type:actionTypes.ADD_USER_FAILURE
}
};
