import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateCategoria, getCategoria } from "../../../actions/categoriasAction";
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

class UpdateCategoria extends Component {
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

  componentWillReceiveProps(nextProps) {
    const {
      Codigo,
      Tipo
    } = nextProps.categoria.categorias;

    this.setState({
      Codigo,
      Tipo
    });
  }

  componentDidMount() {
    const { Codigo } = this.props.match.params;
    this.props.getCategoria(Codigo, this.props.history);
    console.log(Codigo);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const updateCategoria = {
      Codigo: this.state.Codigo,
      Tipo: this.state.Tipo
    };

    this.props.updateCategoria(updateCategoria, this.props.history);
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
                    Actualizar categoría
                  </Nav>
                </CardHeader>
                <CardBody>
                  <Form noValidate onSubmit={this.onSubmit}>
                    <div className="form-row">
                      <FormGroup className="col-md-6 ">
                        <label
                          htmlFor="Código"
                          className="justify-content-left"
                        >
                          Código:
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
                        <label htmlFor="Tipo">
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
                      <Button color="info" type="primary" htmlType="submit">
                         Actualizar
                      </Button>
                      <span> </span>
                      <Link to="/categorias/index">
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

UpdateCategoria.propTypes = {
  getCategoria: PropTypes.func.isRequired,
  updateCategoria: PropTypes.func.isRequired,
  categoria: PropTypes.object.isRequired
};

const mapStatToProps = state => ({
  categoria: state.categoria.categoria
});

export default connect(mapStatToProps, { getCategoria, updateCategoria })(
  UpdateCategoria
);
