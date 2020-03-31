import {
  GET_INTERIOR_MUEBLES,
  GET_INTERIOR_MUEBLE,
  DELETE_INTERIOR_MUEBLE
} from "../actions/types";

const initialState = {
  interiorMuebles: [],
  interiorMueble: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INTERIOR_MUEBLES:
      return {
        ...state,
        interiorMuebles: action.payload
      };

    case GET_INTERIOR_MUEBLE:
      return {
        ...state,
        interiorMueble: action.payload
      };

    case DELETE_INTERIOR_MUEBLE:
      return {
        ...state
        //expresion para cambiar el estado de manera dinamica despues de eliminar registro sin necesidad de hacer refresh
        // interiorMuebles: state.interiorMuebles.interiorMueble.filter(
        //   interiorMuebles => interiorMuebles.interiorMueble.Codigo !== action.payload
        // )
      };
    default:
      return state;
  }
}
