const GET_USERS = "GET_USERS";

const initialState = [];

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;

    default:
      return state;
  }
};

export const getAllUsersAction = (payload) => {
  return {
    type: GET_USERS,
    payload,
  };
};

export default usersReducer;
