import React, { Component } from "react";
import Navbar from "components/Navbar";
import jwt_decode from "jwt-decode";
import DarkFooter from "./Footers/DarkFooter";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      Usuario: "",
      Nombre: "",
      UsuarioPassword: "",
      Telefono: "",
      Celular: "",
      Mail: "",
      Calle: "",
      Colonia: "",
      CodigoPostal: "",
      Ciudad: "",
      Pais: "",
      UsuarioStatus: "",
      errors: {}
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      Usuario: decoded.Usuario,
      Nombre: decoded.Nombre,
      Telefono: decoded.Telefono,
      Celular: decoded.Celular,
      Mail: decoded.Mail,
      Calle: decoded.Calle,
      Colonia: decoded.Colonia,
      CodigoPostal: decoded.CodigoPostal,
      Ciudad: decoded.Ciudad,
      Pais: decoded.Pais,
      UsuarioStatus: decoded.UsuarioStatus
    });
  }

  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">Perfil</h1>
            </div>
            <table className="table col-md-6 mx-auto">
              <tbody>
                <tr>
                  <td>Usuario</td>
                  <td>{this.state.Usuario}</td>
                </tr>
                <tr>
                  <td>Nombre</td>
                  <td>{this.state.Nombre}</td>
                </tr>
                <tr>
                  <td>Teléfono</td>
                  <td>{this.state.Telefono}</td>
                </tr>
                <tr>
                  <td>Celular</td>
                  <td>{this.state.Celular}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>{this.state.Mail}</td>
                </tr>
                <tr>
                  <td>Calle</td>
                  <td>{this.state.Calle}</td>
                </tr>
                <tr>
                  <td>Colonia</td>
                  <td>{this.state.Colonia}</td>
                </tr>
                <tr>
                  <td>Código Postal</td>
                  <td>{this.state.CodigoPostal}</td>
                </tr>
                <tr>
                  <td>Ciudad</td>
                  <td>{this.state.Ciudad}</td>
                </tr>
                <tr>
                  <td>País</td>
                  <td>{this.state.Pais}</td>
                </tr>
                <tr>
                  <td>Status</td>
                  <td>{this.state.UsuarioStatus}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <DarkFooter />
      </div>
    );
  }
}

export default Profile;
