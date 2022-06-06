import {
  addUserRequest,
  addUserSuccess,
  addUserFailure
} from "../src/redux/action";
import reducer from "../src/redux/reducer";

/**
 * READ ONLY
 * DO NOT CHANGE
 */

const initState = {
  isLoading: false,
  isError: false,
  data: []
};

test("should return the initial state", () => {
  expect(reducer(undefined, {})).toEqual(initState);
});

test("should render a loading state correctly", () => {
  const previousState = initState;
  expect(reducer(previousState, addUserRequest())).toEqual({
    ...initState,
    isLoading: true
  });
});

test("should handle adding a user to empty user list", () => {
  const previousState = {
    ...initState,
    isLoading: true
  };
  const user = {
    name: "Albert",
    id: 1,
    title: "Faculty"
  };
  expect(reducer(previousState, addUserSuccess(user))).toEqual({
    ...previousState,
    isLoading: false,
    data: [
      {
        ...user
      }
    ]
  });
});

test("should handle adding a user to an existing users list", () => {
  const previousState = {
    ...initState,
    isLoading: true,
    data: [
      {
        name: "Albert",
        id: 1,
        title: "Faculty"
      }
    ]
  };
  const user = {
    name: "Nrupul",
    id: 2,
    title: "CEO"
  };
  expect(reducer(previousState, addUserSuccess(user))).toEqual({
    ...previousState,
    isLoading: false,
    data: [
      ...previousState.data,
      {
        ...user
      }
    ]
  });
});

test("should render an error state correctly", () => {
  const previousState = initState;
  expect(reducer(previousState, addUserFailure())).toEqual({
    ...initState,
    isLoading: false,
    isError: true
  });
});

test("default state should return same object", () => {
  const previousState = initState;
  expect(reducer(previousState, {})).toBe(previousState);
});
