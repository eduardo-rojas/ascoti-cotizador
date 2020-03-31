import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createMueble } from "../../../actions/mueblesAction";
import Navbar from "components/Navbar";
import DarkFooter from "../../Footers/DarkFooter";

import {
  Label,
  FormText,
  FormGroup,
  Col,
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
  Row,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

class AddMueble extends Component {
  constructor() {
    super();
    this.state = {
      Codigo: "",
      Nombre: "",
      Familia_FK: "",
      TiposMueble_FK: "",
      Descripcion: "",
      Activo: "",
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

    const newMueble = {
      Codigo: this.state.Codigo,
      Nombre: this.state.Nombre,
      Familia_FK: this.state.Familia_FK,
      TiposMueble_FK: this.state.TiposMueble_FK,
      Descripcion: this.state.Descripcion,
      Activo: this.state.Activo,
      errors: {}
    };

    this.props.createMueble(newMueble, this.props.history);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div id="wrap" className="content">
          <div id="main">
            <div
              className="section section-signup"
              style={{
                backgroundPosition: "top center",
                minHeight: "700px"
              }}
            >
              <Container>
                <Card className="text-left">
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-left"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      Agregar mueble
                    </Nav>
                  </CardHeader>

                  <CardBody>
                    <Form noValidate onSubmit={this.onSubmit}>
                      <div className="form-row">
                        <FormGroup className="col-md-6 ">
                          <label
                            htmlFor="Codigo"
                            className="justify-content-left"
                          >
                            <p>Código: </p>
                          </label>
                          <Input
                            type="text"
                            className="form-control"
                            name="Codigo"
                            value={this.state.Codigo}
                            onChange={this.onChange}
                          ></Input>
                        </FormGroup>
                        <FormGroup className="col-md-6">
                          <label htmlFor="Nombre">
                            <p>Nombre: </p>
                          </label>
                          <Input
                            type="text"
                            className="form-control"
                            name="Nombre"
                            value={this.state.Nombre}
                            onChange={this.onChange}
                          ></Input>
                        </FormGroup>
                      </div>

                      <div className="form-row">
                        <FormGroup className="col-md-6">
                          <label htmlFor="Costo">
                            <p>Familia: </p>
                          </label>
                          <Input
                            id="exampleFormControlSelect2"
                            className="form-control"
                            type="select"
                            name="Familia_FK"
                            value={this.state.Familia_FK}
                            onChange={this.onChange}
                          >
                            <option>Gabinetes</option>
                            <option>Alacena</option>
                            <option>Locker</option>
                            <option>Panel</option>
                          </Input>
                        </FormGroup>

                        <FormGroup className="col-md-6">
                          <label htmlFor="Factor">
                            <p>Tipo de mueble: </p>
                          </label>
                          <Input
                            id="exampleFormControlSelect2"
                            className="form-control"
                            type="select"
                            name="TiposMueble_FK"
                            value={this.state.TiposMueble_FK}
                            onChange={this.onChange}
                          >
                            <option>Aventos</option>
                            <option>Cajones</option>
                            <option>Despensa</option>
                            <option>Extraible</option>
                            <option>Microondas</option>
                            <option>Nichos</option>
                            <option>Panel</option>
                            <option>Parrilla</option>
                            <option>Puertas</option>
                            <option>Puertas y Cajón</option>
                            <option>Refrigerador</option>
                            <option>Rinconeros</option>
                            <option>Rinconeros</option>
                            <option>Tarja</option>
                          </Input>
                        </FormGroup>

                        <FormGroup className="col-md-6">
                          <label htmlFor="PrecioVenta">
                            <p>Descripción: </p>
                          </label>
                          <Input
                            htmlFor="exampleFormControlTextarea1"
                            type="text"
                            className="form-control"
                            name="Descripcion"
                            value={this.state.Descripcion}
                            onChange={this.onChange}
                          ></Input>
                        </FormGroup>

                        <FormGroup className="col-md-6">
                          <label htmlFor="Activo">
                            <p>Activo: </p>
                          </label>
                          <Input
                            id="exampleFormControlSelect2"
                            className="form-control"
                            type="select"
                            name="Activo"
                            value={this.state.Activo}
                            onChange={this.onChange}
                          >
                            <option value="1">Activo</option>
                            <option value="0">Inactivo</option>
                          </Input>
                        </FormGroup>
                      </div>
                      <FormGroup></FormGroup>
                      <CardFooter className="text-left">
                        <Button color="info" type="submit">
                          <i className="now-ui-icons ui-1_check"></i> Registrar
                        </Button>
                        <Link to="/muebles/index">
                          <Button color="danger" type="button">
                            <i className="now-ui-icons ui-1_simple-remove"></i>
                            Cancelar
                          </Button>
                        </Link>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Card>

                {/* Old add form */}
                {/* <Row>
                  <Card className="card-signup" data-background-color="blue">
                    <Form noValidate onSubmit={this.onSubmit}>
                      <CardHeader className="text-center">
                        <CardTitle className="title-up" tag="h3">
                          Agregar Mueble
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <Input
                            type="text"
                            className="form-control"
                            name="Codigo"
                            placeholder="Ingrese el código del mueble..."
                            value={this.state.Codigo}
                            onChange={this.onChange}
                          ></Input>
                        </InputGroup>

                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <Input
                            type="text"
                            className="form-control"
                            name="Nombre"
                            placeholder="Ingrese el nombre del mueble... "
                            value={this.state.Nombre}
                            onChange={this.onChange}
                          ></Input>
                        </InputGroup>

                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <label htmlFor="exampleFormControlSelect1"></label>

                          <Input
                            id="exampleFormControlSelect2"
                            className="form-control"
                            type="select"
                            name="Familia_FK"
                            value={this.state.Familia_FK}
                            onChange={this.onChange}
                          >
                            <option>Gabinetes</option>
                            <option>Alacena</option>
                            <option>Locker</option>
                            <option>Panel</option>
                          </Input>
                        </InputGroup>

                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>

                          <Input
                            id="exampleFormControlSelect2"
                            className="form-control"
                            type="select"
                            name="TiposMueble_FK"
                            value={this.state.TiposMueble_FK}
                            onChange={this.onChange}
                          >
                            <option>Aventos</option>
                            <option>Cajones</option>
                            <option>Despensa</option>
                            <option>Extraible</option>
                            <option>Microondas</option>
                            <option>Nichos</option>
                            <option>Panel</option>
                            <option>Parrilla</option>
                            <option>Puertas</option>
                            <option>Puertas y Cajón</option>
                            <option>Refrigerador</option>
                            <option>Rinconeros</option>
                            <option>Rinconeros</option>
                            <option>Tarja</option>
                          </Input>

                          {/* <Input
                            type="text"
                            className="form-control"
                            name="TiposMueble_FK"
                            placeholder="Ingrese el TiposMueble_FK..."
                            value={this.state.TiposMueble_FK}
                            onChange={this.onChange}
                          ></Input> 
                        </InputGroup>

                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <Input
                            htmlFor="exampleFormControlSelect1"
                            type="text"
                            className="form-control"
                            name="Descripcion"
                            value={this.state.Descripcion}
                            onChange={this.onChange}
                          ></Input>
                        </InputGroup>

                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend"></InputGroupAddon>
                          <Input
                            id="exampleFormControlSelect2"
                            className="form-control"
                            type="select"
                            name="Activo"
                            value={this.state.Activo}
                            onChange={this.onChange}
                          >
                            <option value="1">Activo</option>
                            <option value="0">Inactivo</option>
                          </Input>
                        </InputGroup>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-neutral btn-round"
                          color="success"
                          type="submit"
                        >
                          Registrar
                        </Button>
                      </CardFooter>
                    </Form>
                  </Card>
                </Row>
                 */}
              </Container>
            </div>
          </div>
        </div>

        <DarkFooter />
      </div>
    );
  }
}

AddMueble.propTypes = {
  createMueble: PropTypes.func.isRequired
};

export default connect(null, { createMueble })(AddMueble);
