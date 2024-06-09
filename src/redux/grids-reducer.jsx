const GET_GRIDS = "GET_GRIDS";

const initialState = [];

const gridsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GRIDS:
      return action.payload;

    default:
      return state;
  }
};

export const getGridsAction = (payload) => {
  return {
    type: GET_GRIDS,
    payload,
  };
};


export default gridsReducer;
