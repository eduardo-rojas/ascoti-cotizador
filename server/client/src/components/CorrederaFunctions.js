import axios from "axios";

export const agregar = newCorredera => {
  return axios
    .post("corredera/agregar", {
      Codigo: newCorredera.Codigo,
      Nombre: newCorredera.Nombre,
      Costo: newCorredera.Costo,
      Factor: newCorredera.Factor,
      PrecioVenta: newCorredera.PrecioVenta,
      Activo: newCorredera.Activo
    })
    .then(response => {
      console.log("Elemento Corredera ha sido registrado.");
    });
};

export const lista = listaCorrederas => {
  return axios.get("corredera/lista").then(res => {
    const correderas = res.data;
    this.setState({ correderas });
  });
};
