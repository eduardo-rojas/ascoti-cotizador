import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateInteriorMueble,
  getInteriorMueble
} from "../../../actions/interiorMuebleAction";
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

class UpdateInteriorMueble extends Component {
  constructor() {
    super();
    this.state = {
      Codigo: "",
      Mueble_FK: "",
      Interior_FK: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      Codigo,
      Mueble_FK,
      Interior_FK
    } = nextProps.interiorMueble.interiorMuebles;

    this.setState({
      Codigo,
      Mueble_FK,
      Interior_FK
    });
  }

  componentDidMount() {
    const { Codigo } = this.props.match.params;
    this.props.getInteriorMueble(Codigo, this.props.history);
    console.log(Codigo);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const updatedInteriorMueble = {
      Codigo: this.state.Codigo,
      Mueble_FK: this.state.Mueble_FK,
      Interior_FK: this.state.Interior_FK
    };

    this.props.updateInteriorMueble(updatedInteriorMueble, this.props.history);
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
                          Actualizar Interior Mueble
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
                            placeholder="Ingrese el código de interiorMueble..."
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
                            placeholder="Ingrese el Mueble_FK... "
                            value={this.state.Mueble_FK}
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

UpdateInteriorMueble.propTypes = {
  getInteriorMueble: PropTypes.func.isRequired,
  updateInteriorMueble: PropTypes.func.isRequired,
  interiorMueble: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  interiorMueble: state.interiorMueble.interiorMueble
});

export default connect(mapStateToProps, {
  getInteriorMueble,
  updateInteriorMueble
})(UpdateInteriorMueble);
