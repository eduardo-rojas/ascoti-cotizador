import axios from "axios";
import { GET_ERRORS, GET_BISAGRAS, GET_BISAGRA, DELETE_BISAGRA } from "./types";

export const createBisagra = (bisagra, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/bisagras/agregar",
      bisagra
    );
    history.push("/bisagras/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const getBisagras = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/bisagras/lista");
  dispatch({
    type: GET_BISAGRAS,
    payload: res.data
  });
};

export const getBisagra = (Codigo, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/bisagras/bisagra/${Codigo}`
  );
  dispatch({
    type: GET_BISAGRA,
    payload: res.data
  });
};

export const updateBisagra = (updatedBisagra, history) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/bisagras/update",
      updatedBisagra
    );
    history.push("/bisagras/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const deleteBisagra = Codigo => async dispatch => {
  if (window.confirm("Continuar para borrar el registro de la bisagra.")) {
    await axios.delete(`http://localhost:5000/bisagras/bisagra/${Codigo}`);
    dispatch({
      type: DELETE_BISAGRA,
      payload: Codigo
    });
  }
};
