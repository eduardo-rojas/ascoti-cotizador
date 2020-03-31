import axios from "axios";
import { GET_ERRORS, GET_CORREDERAS, GET_CORREDERA, DELETE_CORREDERA } from "./types";

export const createCorredera = (corredera, history) => async dispatch => {
  try {
    const res = await axios.post(
      "http://localhost:5000/correderas/agregar",
      corredera
    );
    history.push("/correderas/lista");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};


export const getCorredera = (Codigo, history) => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/correderas/corredera/${Codigo}`
  );
  dispatch({
    type: GET_CORREDERA,
    payload: res.data
  });
  console.log("Aqui");
};

export const updateCorredera = (updatedCorredera, history) => async dispatch => {
  try {
    const res = await axios.put(
      "http://localhost:5000/correderas/update",
      updatedCorredera
    );
    history.push("/correderas/index");
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

// ** Lista  

export const getCorrederas = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/correderas/lista");

  dispatch({
    type: GET_CORREDERAS,
    payload: res.data.correderas
  });
};

// ** Eliminar 

export const deleteCorredera = Codigo => async dispatch => {
  if (window.confirm("¿Desea eliminar el registro seleccionado?")) {
    await axios.delete(`http://localhost:5000/correderas/corredera/${Codigo}`);
    dispatch({
      type: DELETE_CORREDERA,
      payload: Codigo
    });
  }
};
