import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createFamilia } from "../../../actions/familiasAction";
import { agregar } from "../../FamiliasFunctions";
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
  Row
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

    // console.log(newBisagra);
    this.props.createFamilia(newFamilia, this.props.history);

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
                <Row>
                  <Card className="card-signup" data-background-color="blue">
                    <Form noValidate onSubmit={this.onSubmit}>
                      <CardHeader className="text-center">
                        <CardTitle className="title-up" tag="h3">
                          Agregar Familia
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
                            placeholder="Ingrese el código de la Familia..."
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
                            name="Familia"
                            placeholder="Ingrese el nombre de la Familia... "
                            value={this.state.Familia}
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
                </Row>
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
