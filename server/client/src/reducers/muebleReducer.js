import { GET_MUEBLES, GET_MUEBLE, DELETE_MUEBLE } from "../actions/types";

const initialState = {
  muebles: [],
  mueble: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MUEBLES:
      return {
        ...state,
        muebles: action.payload
      };

    case GET_MUEBLE:
      return {
        ...state,
        mueble: action.payload
      };

    case DELETE_MUEBLE:
      return {
        ...state
        //expresion para cambiar el estado de manera dinamica despues de eliminar registro sin necesidad de hacer refresh
        // muebles: state.muebles.mueble.filter(
        //   muebles => muebles.mueble.Codigo !== action.payload
        // )
      };
    default:
      return state;
  }
}
