import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateMueble, getMueble } from "../../../actions/mueblesAction";
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
  Nav
} from "reactstrap";

class UpdateMueble extends Component {
  constructor() {
    super();
    this.state = {
      Codigo: "",
      Nombre: "",
      Familia_FK: "",
      TiposMueble_FK: "",
      Activo: "",
      Descripcion: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      Codigo,
      Nombre,
      Familia_FK,
      TiposMueble_FK,
      Activo,
      Descripcion
    } = nextProps.mueble.muebles;

    this.setState({
      Codigo,
      Nombre,
      Familia_FK,
      TiposMueble_FK,
      Activo,
      Descripcion
    });
  }

  componentDidMount() {
    const { Codigo } = this.props.match.params;
    this.props.getMueble(Codigo, this.props.history);
    console.log(Codigo);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const updatedMueble = {
      Codigo: this.state.Codigo,
      Nombre: this.state.Nombre,
      Familia_FK: this.state.Familia_FK,
      TiposMueble_FK: this.state.TiposMueble_FK,
      Activo: this.state.Activo,
      Descripcion: this.state.Descripcion
    };

    this.props.updateMueble(updatedMueble, this.props.history);
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
                      Actualizar mueble
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

                {/* Old Form Update */}
                {/* <Row>
                  <Card className="card-signup" data-background-color="blue">
                    <Form noValidate onSubmit={this.onSubmit}>
                      <CardHeader className="text-center">
                        <CardTitle className="title-up" tag="h3">
                          Actualizar mueble
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
                            placeholder="Ingrese el código del mueble..."
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
                            placeholder="Ingrese el nombre del mueble... "
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
                            id="exampleFormControlSelect2"
                            type="select"
                            className="form-control"
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
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons files_single-copy-04"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            id="exampleFormControlSelect2"
                            type="select"
                            className="form-control"
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
                            name="Descripcion"
                            placeholder="Ingrese descripción..."
                            value={this.state.Descripcion}
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
                            id="exampleFormControlSelect2"
                            type="select"
                            className="form-control"
                            name="Activo"
                            placeholder="Activo..."
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
                          Actualizar
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

UpdateMueble.propTypes = {
  getMueble: PropTypes.func.isRequired,
  updateMueble: PropTypes.func.isRequired,
  mueble: PropTypes.object.isRequired
};

const mapStatToProps = state => ({
  mueble: state.mueble.mueble
});

export default connect(mapStatToProps, { getMueble, updateMueble })(
  UpdateMueble
);
