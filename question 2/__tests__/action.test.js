import {
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  actionTypes
} from "../src/redux/action";

/**
 * READ ONLY
 * DO NOT CHANGE
 */


test("action types should have required keys", () => {
  expect(actionTypes).toEqual({
    ADD_USER_REQUEST: "ADD_USER_REQUEST",
    ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
    ADD_USER_FAILURE: "ADD_USER_FAILURE"
  });
});

test("add user request action should be correct", () => {
  expect(addUserRequest()).toEqual({
    type: actionTypes.ADD_USER_REQUEST
  });
});

test("add user success action should be correct", () => {
  const payload = {
    name: "Albert",
    id: 1,
    title: "Faculty"
  };
  expect(addUserSuccess(payload)).toEqual({
    type: actionTypes.ADD_USER_SUCCESS,
    payload
  });
});

test("add user request action should be correct", () => {
  expect(addUserFailure()).toEqual({
    type: actionTypes.ADD_USER_FAILURE
  });
});
