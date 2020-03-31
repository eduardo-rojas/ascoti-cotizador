import { GET_BISAGRAS, GET_BISAGRA, DELETE_BISAGRA } from "../actions/types";

const initialState = {
  bisagras: [],
  bisagra: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BISAGRAS:
      return {
        ...state,
        bisagras: action.payload
      };

    case GET_BISAGRA:
      return {
        ...state,
        bisagra: action.payload
      };

    case DELETE_BISAGRA:
      return {
        ...state
        // bisagras: state.bisagras.filter(
        //   bisagra => bisagra.Codigo !== action.payload
        // )
        //expresion para cambiar el estado de manera dinamica despues de eliminar registro sin necesidad de hacer refresh
        // bisagras: state.bisagras.bisagra.filter(
        //   bisagras => bisagras.bisagra.Codigo !== action.payload
        // )
      };
    default:
      return state;
  }
}
