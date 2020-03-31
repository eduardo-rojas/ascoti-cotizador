import axios from "axios";

export const agregar = newBisagra => {
  return axios
    .post("bisagras/agregar", {
      Codigo: newBisagra.Codigo,
      Nombre: newBisagra.Nombre,
      Costo: newBisagra.Costo,
      Factor: newBisagra.Factor,
      PrecioVenta: newBisagra.PrecioVenta
    })
    .then(response => {
      console.log("Elemento bisagra ha sido registrado.");
    });
};

export const lista = listaBisagras => {
  return axios.get("bisagras/lista").then(res => {
    const bisagras = res.data;
    this.setState({ bisagras });
  });
};
