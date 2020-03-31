import { GET_APERTURASM } from "../actions/types";

const initialState = {
  aperturasm: [],
  aperturam: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_APERTURASM:
      return {
        ...state,
        aperturasm: action.payload
      };
    default:
      return state;
  }
}
