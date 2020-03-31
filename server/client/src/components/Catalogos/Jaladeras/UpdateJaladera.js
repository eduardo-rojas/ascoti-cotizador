import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateJaladera, getJaladera } from "../../../actions/jaladerasAction";
import Navbar from "components/Navbar";
import DarkFooter from "../../Footers/DarkFooter";
import { Button } from "antd";

import {
  Label,
  FormText,
  FormGroup,
  Col,
  Nav,
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

class UpdateJaladera extends Component {
  constructor() {
    super();
    this.state = {
      Codigo: "",
      Nombre: "",
      Costo: "",
      Factor: "",
      PrecioVenta: "",
      activo: "",
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
      PrecioVenta,
      activo
    } = nextProps.jaladera.jaladeras;

    this.setState({
      Codigo,
      Nombre,
      Costo,
      Factor,
      PrecioVenta,
      activo
    });
  }

  componentDidMount() {
    const { Codigo } = this.props.match.params;
    this.props.getJaladera(Codigo, this.props.history);
    console.log(Codigo);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const updatedJaladera = {
      Codigo: this.state.Codigo,
      Nombre: this.state.Nombre,
      Costo: this.state.Costo,
      Factor: this.state.Factor,
      PrecioVenta: this.state.PrecioVenta
    };
    this.props.updateJaladera(updatedJaladera, this.props.history);
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
                    Actualizar Jaladera
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
                          disabled
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

                      <FormGroup className="col-md-6">
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
                         Actualizar
                      </Button>
                      <span>   </span>
                      <Link to="/jaladeras/index">
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

UpdateJaladera.propTypes = {
    getJaladera: PropTypes.func.isRequired,
    updateJaladera: PropTypes.func.isRequired,
    jaladera: PropTypes.object.isRequired
};

const mapStatToProps = state => ({
  jaladera: state.jaladera.jaladera
});

export default connect(mapStatToProps, { getJaladera, updateJaladera })(
    updateJaladera
);
