import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateFrentes_mueble,
  getFrentes_mueble
} from "../../../actions/frentes_mueblesAction";
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

class UpdateFrentes_Mueble extends Component {
  constructor() {
    super();
    this.state = {
      Codigo: "",
      Mueble_FK: "",
      Frente_FK: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      Codigo,
      Mueble_FK,
      Frente_FK
    } = nextProps.frentes_mueble.frentes_muebles;

    this.setState({
      Codigo,
      Mueble_FK,
      Frente_FK
    });
  }

  componentDidMount() {
    const { Codigo } = this.props.match.params;
    this.props.getFrentes_mueble(Codigo, this.props.history);
    console.log(Codigo);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const updatedFrentes_Mueble = {
      Codigo: this.state.Codigo,
      Mueble_FK: this.state.Mueble_FK,
      Frente_FK: this.state.Frente_FK
    };

    this.props.updateFrentes_mueble(updatedFrentes_Mueble, this.props.history);
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
                          Actualizar Frentes_Mueble
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
                            placeholder="Ingrese el código de frentes_mueble..."
                            value={this.state.Codigo}
                            disabled
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
                            name="Mueble_FK"
                            placeholder="Ingrese el nombre de frentes_mueble... "
                            value={this.state.Mueble_FK}
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
                            name="Frente_FK"
                            placeholder="Ingrese el costo..."
                            value={this.state.Frente_FK}
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
                          Actualizar
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

UpdateFrentes_Mueble.propTypes = {
  getFrentes_mueble: PropTypes.func.isRequired,
  updateFrentes_mueble: PropTypes.func.isRequired,
  frentes_mueble: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  frentes_mueble: state.frentes_mueble.frentes_mueble
});

export default connect(mapStateToProps, {
  getFrentes_mueble,
  updateFrentes_mueble
})(UpdateFrentes_Mueble);
