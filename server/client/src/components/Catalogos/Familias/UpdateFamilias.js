import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateFamilia, getFamilia } from "../../../actions/familiasAction";
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

class UpdateFamilia extends Component {
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

  componentWillReceiveProps(nextProps) {
    const {
      Codigo,
      Familia
    } = nextProps.familia.familias;

    this.setState({
      Codigo,
      Familia
    });
    console.log(nextProps.familia.familias);
  }

  componentDidMount() {
    const { Codigo } = this.props.match.params;
    this.props.getFamilia(Codigo, this.props.history);
    console.log(Codigo);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const updateFamilia = {
      Codigo: this.state.Codigo,
      Familia: this.state.Familia
    };

    this.props.updateFamilia(updateFamilia, this.props.history);
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
                    Actualizar familia
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
                        <label htmlFor="Familia">
                          Nombre:
                        </label>
                        <Input
                          type="text"
                          className="form-control"
                          name="Familia"
                          value={this.state.Familia}
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

UpdateFamilia.propTypes = {
  getFamilia: PropTypes.func.isRequired,
  updateFamilia: PropTypes.func.isRequired,
  familia: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  familia: state.familia.familia
});

export default connect(mapStateToProps, { getFamilia, updateFamilia })(
  UpdateFamilia
);
