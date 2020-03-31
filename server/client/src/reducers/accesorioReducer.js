import {
  GET_ACCESORIOS,
  GET_ACCESORIO,
  DELETE_ACCESORIO
} from "../actions/types";

const initialState = {
  accesorios: [],
  accesorio: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACCESORIOS:
      return {
        ...state,
        accesorios: action.payload
      };

    case GET_ACCESORIO:
      return {
        ...state,
        accesorio: action.payload
      };

    case DELETE_ACCESORIO:
      return {
        ...state
        //expresion para cambiar el estado de manera dinamica despues de eliminar registro sin necesidad de hacer refresh
        // accesorios: state.accesorios.accesorio.filter(
        //   accesorios => accesorios.accesorio.Codigo !== action.payload
        // )
      };
    default:
      return state;
  }
}
