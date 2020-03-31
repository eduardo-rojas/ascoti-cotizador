import { GET_CORREDERAS, GET_CORREDERA } from "../actions/types";

const initialState = {
  correderas: [],
  corredera: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CORREDERAS:
      return {
        ...state,
        correderas: action.payload
      };

    case GET_CORREDERA:
      return {
        ...state,
        corredera: action.payload
      };

    default:
      return state;
  }
}
