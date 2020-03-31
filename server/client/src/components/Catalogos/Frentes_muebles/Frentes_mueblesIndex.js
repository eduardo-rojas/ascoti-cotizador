import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getFrentes_muebles } from "../../../actions/frentes_mueblesAction";
import PropTypes from "prop-types";
import Frentes_muebleItem from "./Frentes_muebleItem";
import { Link, withRouter } from "react-router-dom";
import { Table, Button } from "antd";

class Frentes_mueblesIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetFrentes_muebles();
  }

  render() {
    const { frentes_mueble } = this.props.frentes_mueble;
    
   //console.log(frentes_mueble);

    // Asigna a los datos a la tabla
    const { Column } = Table;

    return (
      <div>
        <Navbar />
        <div
          className="section "
          style={{
            backgroundPosition: "top center",
            minHeight: "700px"
          }}
        >
          <div className="container">
            <div className="jumbotron mt-5">
              <div className="col-sm-12 mx-auto">
                <h3 className="text-left"><b>Frentes Muebles</b></h3>
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                    <Link to="/frentes_muebles/add" className="nav-link">
                    <Button
                        type="primary"
                      >
                        Agregar Frente
                      </Button>
                      </Link>
                    </div>
                    
                    <div className="row">
                    <div className="col-sm-12 mx-auto">
                      <Table dataSource={frentes_mueble} size="middle"  pagination={{ pageSize: 50 }}>
                        <Column
                          
                          key="acciones"
                          width= "140px"
                          align="center"
                          render={(text, record) => (
                            <span>
                              <Link to={`/frentes_muebles/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Editar
                              </Button>
                              </Link>{" "}
                              <Link to={`/frentes_muebles/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Borrar
                              </Button>
                              </Link>
                              
                            </span>
                          )}
                        />
                        <Column
                          title="Código"
                          dataIndex="Codigo"
                          key="Codigo"
                          width= "100px"
                        />
                        <Column title="Mueble" dataIndex="Mueble" width= "150px"/>
                        <Column title="Frente" dataIndex="Frente" width= "150px"/>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DarkFooter />
      </div>
    );
  }
}

Frentes_mueblesIndex.propTypes = {
  frentes_mueble: PropTypes.object.isRequired,
  getFrentes_muebles: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onGetFrentes_muebles: () => dispatch(getFrentes_muebles())
  };
};

const mapStateToProps = state => ({
  frentes_mueble: state.frentes_mueble.frentes_muebles
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Frentes_mueblesIndex);
