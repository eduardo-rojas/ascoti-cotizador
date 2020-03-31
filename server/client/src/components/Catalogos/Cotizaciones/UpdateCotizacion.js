import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateBisagra, getBisagra } from "../../../actions/bisagrasAction";
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

class UpdateBisagra extends Component {
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

  componentWillReceiveProps(nextProps) {
    const {
      Codigo,
      Nombre,
      Costo,
      Factor,
      PrecioVenta
    } = nextProps.bisagra.bisagras;

    this.setState({
      Codigo,
      Nombre,
      Costo,
      Factor,
      PrecioVenta
    });
  }

  componentDidMount() {
    const { Codigo } = this.props.match.params;
    this.props.getBisagra(Codigo, this.props.history);
    console.log(Codigo);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const updatedBisagra = {
      Codigo: this.state.Codigo,
      Nombre: this.state.Nombre,
      Costo: this.state.Costo,
      Factor: this.state.Factor,
      PrecioVenta: this.state.PrecioVenta
    };

    this.props.updateBisagra(updatedBisagra, this.props.history);
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
                          Actualizar Bisagra
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

UpdateBisagra.propTypes = {
  getBisagra: PropTypes.func.isRequired,
  updateBisagra: PropTypes.func.isRequired,
  bisagra: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  bisagra: state.bisagra.bisagra
});

export default connect(mapStateToProps, { getBisagra, updateBisagra })(
  UpdateBisagra
);
