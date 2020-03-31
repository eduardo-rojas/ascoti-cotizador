import axios from "axios";

export const register = newUser => {
  return axios
    .post("users/registrar", {
      Usuario: newUser.Usuario,
      Nombre: newUser.Nombre,
      UsuarioPassword: newUser.UsuarioPassword,
      Telefono: newUser.Telefono,
      Celular: newUser.Celular,
      Mail: newUser.Mail,
      Calle: newUser.Calle,
      Colonia: newUser.Colonia,
      CodigoPostal: newUser.CodigoPostal,
      Ciudad: newUser.Ciudad,
      Pais: newUser.Pais,
      UsuarioStatus: newUser.UsuarioStatus
    })
    .then(response => {
      console.log("El usuario ha sido registrado.");
    });
};

export const login = user => {
  return axios
    .post("users/login", {
      Usuario: user.Usuario,
      UsuarioPassword: user.UsuarioPassword
    })
    .then(response => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
};

export const lista = listaUsuarios => {
  return axios.get("users/lista").then(res => {
    const users = res.data;
    this.setState({ users });
  });
};
