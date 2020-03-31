import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import bisagraReducer from "./bisagraReducer";
import jaladeraReducer from "./jaladeraReducer";
import correderaReducer from "./correderaReducer";
import accesorioReducer from "./accesorioReducer";
import muebleReducer from "./muebleReducer";
import aperturamReducer from "./aperturamReducer";
import interiorMuebleReducer from "./interiorMuebleReducer";
import frentes_muebleReducer from "./frentes_muebleReducer";
import familiaReducer from "./familiaReducer";
import categoriaReducer from "./categoriaReducer";
import rolReducer from "./rolReducer";
import userReducer from "./userReducer";
import cotizacionReducer from "./cotizacionReducer";

export default combineReducers({
  errors: errorReducer,
  bisagra: bisagraReducer,
  jaladera: jaladeraReducer,
  corredera: correderaReducer,
  accesorio: accesorioReducer,
  mueble: muebleReducer,
  aperturam: aperturamReducer,
  interiorMueble: interiorMuebleReducer,
  frentes_mueble: frentes_muebleReducer,
  familia: familiaReducer,
  categoria: categoriaReducer,
  rol: rolReducer,
  user: userReducer,
  cotizacion: cotizacionReducer,
});
