import { GET_ROLES, GET_ROL } from "../actions/types";

const initialState = {
  roles: [],
  rol: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ROLES:
      return {
        ...state,
        roles: action.payload
      };

    case GET_ROL:
      return {
        ...state,
        rol: action.payload
      };

      default:
        return state;
}
}