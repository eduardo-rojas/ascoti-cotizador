import React, { Component } from "react";
import { register } from "./UserFunctions";
import { Link } from "react-router-dom";
import Navbar from "components/Navbar";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row
} from "reactstrap";

class Register extends Component {
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

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      Usuario: this.state.Usuario,
      Nombre: this.state.Nombre,
      UsuarioPassword: this.state.UsuarioPassword,
      Telefono: this.state.Telefono,
      Celular: this.state.Celular,
      Mail: this.state.Mail,
      Calle: this.state.Calle,
      Colonia: this.state.Colonia,
      CodigoPostal: this.state.CodigoPostal,
      Ciudad: this.state.Ciudad,
      Pais: this.state.Pais,
      UsuarioStatus: this.state.UsuarioStatus
    };

    register(newUser).then(res => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    const noLoginButton = (
      <div className="col text-center">
        <Button
          className="btn-round btn-white"
          color="default"
          to="/login"
          outline
          size="lg"
          tag={Link}
        >
          Ir a Login
        </Button>
      </div>
    );

    const loginButton = <div></div>;
    return (
      <>
        <Navbar />
        <div
          className="section section-signup"
          style={{
            backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
            minHeight: "700px"
          }}
        >
          <Container>
            <Row>
              <Card className="card-signup" data-background-color="blue">
                <Form noValidate onSubmit={this.onSubmit}>
                  <CardHeader className="text-center">
                    <CardTitle className="title-up" tag="h3">
                      Registrar un nuevo usuario
                    </CardTitle>
                    <div className="social-line">
                      {/* Seccion opcional para links de redes sociales */}
                    </div>
                  </CardHeader>
                  <CardBody>
                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_single-02"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="Nombre"
                        placeholder="Ingrese el nombre completo..."
                        value={this.state.Nombre}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="Usuario"
                        placeholder="Ingrese el Usuario... "
                        value={this.state.Usuario}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        className="form-control"
                        name="UsuarioPassword"
                        placeholder="Ingrese la contraseña del usuario..."
                        value={this.state.UsuarioPassword}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons gestures_tap-01"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="Telefono"
                        placeholder="Ingrese el número de teléfono..."
                        value={this.state.Telefono}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons tech_mobile"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="Celular"
                        placeholder="Ingrese el número de celular..."
                        value={this.state.Celular}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="Mail"
                        placeholder="Ingrese la dirección de email..."
                        value={this.state.Mail}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_bookmark"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="Calle"
                        placeholder="Ingrese el nombre de la calle..."
                        value={this.state.Calle}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_map-big"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="Colonia"
                        placeholder="Ingrese la colonia..."
                        value={this.state.Colonia}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_compass-05"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="CodigoPostal"
                        placeholder="Ingrese el código postal..."
                        value={this.state.CodigoPostal}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_pin"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="Ciudad"
                        placeholder="Ingrese la ciudad..."
                        value={this.state.Ciudad}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons location_world"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="Pais"
                        placeholder="Ingrese el país..."
                        value={this.state.Pais}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>

                    <InputGroup className={"no-border"}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons business_badge"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        className="form-control"
                        name="UsuarioStatus"
                        placeholder="Ingrese el status..."
                        value={this.state.UsuarioStatus}
                        onChange={this.onChange}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-neutral btn-round"
                      color="info"
                      type="submit"
                    >
                      Registrar
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Row>

            {localStorage.usertoken ? loginButton : noLoginButton}
          </Container>
        </div>
      </>
    );
  }
}

export default Register;
