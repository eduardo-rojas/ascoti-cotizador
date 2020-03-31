import { GET_COTIZACIONES, GET_COTIZACION, DELETE_COTIZACION } from "../actions/types";

const initialState = {
  cotizaciones: [],
  cotizacion: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COTIZACIONES:
      return {
        ...state,
        cotizaciones: action.payload
      };

    case GET_COTIZACION:
      return {
        ...state,
        cotizacion: action.payload
      };

    case DELETE_COTIZACION:
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
