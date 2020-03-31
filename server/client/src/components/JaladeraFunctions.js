import axios from "axios";

export const agregar = newJaladera => {
  return axios
    .post("jaladera/agregar", {
      Codigo: newJaladera.Codigo,
      Nombre: newJaladera.Nombre,
      Costo: newJaladera.Costo,
      Factor: newJaladera.Factor,
      PrecioVenta: newJaladera.PrecioVenta,
      Activo: newJaladera.Activo
    })
    .then(response => {
      console.log("Elemento Jaladera ha sido registrado.");
    });
};

export const lista = listaJaladeras => {
  return axios.get("jaladera/lista").then(res => {
    const jaladeras = res.data;
    this.setState({ jaladeras });
  });
};
