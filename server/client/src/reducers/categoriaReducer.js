import { GET_CATEGORIAS, GET_CATEGORIA, DELETE_CATEGORIA } from "../actions/types";

const initialState = {
  categorias: [],
  categoria: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIAS:
      return {
        ...state,
        categorias: action.payload
      };

    case GET_CATEGORIA:
      return {
        ...state,
        categorias: action.payload
      };

    case DELETE_CATEGORIA:
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
