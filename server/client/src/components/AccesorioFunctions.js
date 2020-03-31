import axios from "axios";

export const agregar = newAccesorio => {
  return axios
    .post("jaladera/agregar", {
      Codigo: newAccesorio.Codigo,
      Nombre: newAccesorio.Nombre,
      Costo: newAccesorio.Costo,
      Factor: newAccesorio.Factor,
      PrecioVenta: newAccesorio.PrecioVenta,
      Activo: newAccesorio.Activo
    })
    .then(response => {
      console.log("Elemento Accesorio ha sido registrado.");
    });
};

export const lista = listaAccesorios => {
  return axios.get("accesorio/lista").then(res => {
    const accesorios = res.data;
    this.setState({ accesorios });
  });
};
