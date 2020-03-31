import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createFamilia } from "../../../actions/familiasAction";
import { agregar } from "../../FamiliasFunctions";
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

class AddFamilia extends Component {
  constructor() {
    super();
    this.state = {
      Codigo: "",
      Familia: "",
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

    const newFamilia = {
      Codigo: this.state.Codigo,
      Familia: this.state.Familia
    };

    //console.log(newFamilia);
    this.props.createFamilia(newFamilia, this.props.history);

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
                      <b>Agregar Familia</b>
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
                            Familia:
                          </label>
                          <Input
                            type="text"
                            className="form-control"
                            name="Familia"
                            value={this.state.Nombre}
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

AddFamilia.propTypes = {
  createFamilia: PropTypes.func.isRequired
};



export default connect(null, { createFamilia })(AddFamilia);
