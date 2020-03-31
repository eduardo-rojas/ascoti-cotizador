import { GET_JALADERAS, GET_JALADERA, DELETE_JALADERA } from "../actions/types";

const initialState = {
  jaladeras: [],
  jaladera: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_JALADERAS:
      return {
        ...state,
        jaladeras: action.payload
      };
    case GET_JALADERA:
      return {
        ...state,
        jaladera: action.payload
      };
      case DELETE_JALADERA:
    return {
      ...state
      };
    default:
      return state;
  }
}

