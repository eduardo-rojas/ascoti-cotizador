import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createCategoria } from "../../../actions/categoriasAction";
import { agregar } from "../../CategoriasFunctions";
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
  Nav
} from "reactstrap";

class AddCategoria extends Component {
  constructor() {
    super();
    this.state = {
      Codigo: "",
      Tipo: "",
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

    const newCategoria = {
      Codigo: this.state.Codigo,
      Tipo: this.state.Tipo
    };

    // console.log(newBisagra);
    this.props.createCategoria(newCategoria, this.props.history);

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
                  <Card className="text-left" >
                  <CardHeader>
                    <Nav
                      className="nav-tabs-neutral justify-content-left"
                      data-background-color="blue"
                      role="tablist"
                      tabs
                    >
                      <b>Agregar Categoría</b>
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
                            Código:
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
                            Categoría:
                          </label>
                          <Input
                            type="text"
                            className="form-control"
                            name="Tipo"
                            value={this.state.Tipo}
                            onChange={this.onChange}
                          ></Input>
                        </FormGroup>
                    </div>

                      <FormGroup></FormGroup>
                      <CardFooter className="text-left">
                        <Button color="primary" type="primary" htmlType="submit">
                           Registrar
                        </Button>
                        <span>  </span>
                        <Link to="/familias/index">
                          <Button color="danger" type="danger">
                            Cancelar
                          </Button>
                        </Link>
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Card>
                </Container>
            </div>
          </div>
        </div>

        <DarkFooter />
      </div>

    );
  }
}

AddCategoria.propTypes = {
  createCategoria: PropTypes.func.isRequired
};

export default connect(null, { createCategoria })(AddCategoria);
