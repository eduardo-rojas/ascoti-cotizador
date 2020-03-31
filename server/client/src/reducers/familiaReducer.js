import { GET_FAMILIAS, GET_FAMILIA, DELETE_FAMILIA } from "../actions/types";

const initialState = {
  familias: [],
  familia: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FAMILIAS:
      return {
        ...state,
        familias: action.payload
      };

    case GET_FAMILIA:
      return {
        ...state,
        familia: action.payload
      };

    case DELETE_FAMILIA:
      return {
        ...state
        //expresion para cambiar el estado de manera dinamica despues de eliminar registro sin necesidad de hacer refresh
        // bisagras: state.bisagras.bisagra.filter(
        //   bisagras => bisagras.bisagra.Codigo !== action.payload
        // )
      };
    default:
      return state;
  }
}
