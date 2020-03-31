import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createBisagra } from "../../../actions/bisagrasAction";
import { agregar } from "../../BisagraFunctions";
import Navbar from "components/Navbar";
import DarkFooter from "../../Footers/DarkFooter";
import { Button } from "antd";

import {
  Label,
  FormText,
  FormGroup,
  Col,
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

class AddBisagra extends Component {
  constructor() {
    super();
    this.state = {
      Codigo: "",
      Nombre: "",
      Costo: "",
      Factor: "",
      PrecioVenta: "",
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

    const newBisagra = {
      Codigo: this.state.Codigo,
      Nombre: this.state.Nombre,
      Costo: this.state.Costo,
      Factor: this.state.Factor,
      PrecioVenta: this.state.PrecioVenta
    };

    // console.log(newBisagra);
    this.props.createBisagra(newBisagra, this.props.history);

    // agregar(newBisagra).then(res => {
    //   this.props.history.push(`/catalogos`);
    // });
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
                      Agregar Bisagra
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
                            <p>Costo: </p>
                          </label>
                          <Input
                            type="number"
                            className="form-control"
                            name="Costo"
                            value={this.state.Costo}
                            onChange={this.onChange}
                          ></Input>
                        </FormGroup>

                        <FormGroup className="col-md-6">
                          <label htmlFor="Factor">
                            <p>Factor: </p>
                          </label>
                          <Input
                            className="rounded-mb"
                            type="text"
                            className="form-control"
                            name="Factor"
                            value={this.state.Factor}
                            onChange={this.onChange}
                          ></Input>
                        </FormGroup>

                        <FormGroup className="col-md-2">
                          <label htmlFor="PrecioVenta">
                            <p>Precio de Venta: </p>
                          </label>
                          <Input
                            type="number"
                            className="form-control"
                            name="PrecioVenta"
                            value={this.state.PrecioVenta}
                            onChange={this.onChange}
                          ></Input>
                        </FormGroup>
                      </div>
                      <FormGroup></FormGroup>
                      <CardFooter className="text-left">
                        <Button color="info" type="primary" htmlType="submit">
                          <i className="now-ui-icons ui-1_check"></i> Registrar
                        </Button>
                        <Link to="/bisagras/index">
                          <Button color="danger" type="button">
                            <i className="now-ui-icons ui-1_simple-remove"></i>
                            Cancelar
                          </Button>
                        </Link>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Card>

                {/* Previous submit form */}
                {/* <Row>
                  <Card className="card-signup" data-background-color="blue">
                    <Form noValidate onSubmit={this.onSubmit}>
                      <CardHeader className="text-center">
                        <CardTitle className="title-up" tag="h3">
                          Agregar Bisagra
                        </CardTitle>
                      </CardHeader>
                      <CardBody>
                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons files_single-copy-04"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            className="form-control"
                            name="Codigo"
                            placeholder="Ingrese el código de la bisagra..."
                            value={this.state.Codigo}
                            onChange={this.onChange}
                          ></Input>
                        </InputGroup>

                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons files_single-copy-04"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            className="form-control"
                            name="Nombre"
                            placeholder="Ingrese el nombre de la bisagra... "
                            value={this.state.Nombre}
                            onChange={this.onChange}
                          ></Input>
                        </InputGroup>

                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons files_single-copy-04"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="number"
                            className="form-control"
                            name="Costo"
                            placeholder="Ingrese el costo..."
                            value={this.state.Costo}
                            onChange={this.onChange}
                          ></Input>
                        </InputGroup>

                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons files_single-copy-04"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            className="form-control"
                            name="Factor"
                            placeholder="Ingrese el factor..."
                            value={this.state.Factor}
                            onChange={this.onChange}
                          ></Input>
                        </InputGroup>

                        <InputGroup className={"no-border"}>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons files_single-copy-04"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            type="text"
                            className="form-control"
                            name="PrecioVenta"
                            placeholder="Ingrese el precio de venta..."
                            value={this.state.PrecioVenta}
                            onChange={this.onChange}
                          ></Input>
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
                </Row> */}
              </Container>
            </div>
          </div>
        </div>

        <DarkFooter />
      </div>
    );
  }
}

AddBisagra.propTypes = {
  createBisagra: PropTypes.func.isRequired
};

export default connect(null, { createBisagra })(AddBisagra);
