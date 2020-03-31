import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getCorrederas } from "../../../actions/correderasAction";
import PropTypes from "prop-types";
import CorrederaItem from "./CorrederaItem";
import { Link, withRouter } from "react-router-dom";
import { Table, Button, Typography } from "antd";

const {Text} = Typography;

class CorrederasIndex extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetCorrederas();
  }

  render() {
    const correderas = this.props.corredera;

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
                <h3 className="text-left"><b>Correderas</b></h3>
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                    <Link to="/correderas/add" className="nav-link">
                    <Button  type="primary">
                        Agregar Corredera
                      </Button>
                      </Link>
                      <div className="col-sm-12 mx-auto"> 
                      <Table dataSource={correderas} size="middle" width="auto" pagination={{ pageSize: 50 }}>
                        <Column
                          key="acciones"
                          width= "140px"
                          align="center"
                          render={(text, record) => (
                            <span>
                              <Link to={`/correderas/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Editar
                              </Button>
                              </Link>{" "}
                              <Link to={`/correderas/update/${record.Codigo}`}>
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
                          width= "120px"
                        />
                        <Column title="Nombre" dataIndex="Nombre" />
                        <Column title="Costo" dataIndex="Costo" align="right"   className= "column-money" render={(text, record) => (
                            <span>
                              ${record.Costo}
                            </span>
                          )}/>
                        <Column title="Factor" dataIndex="Factor" align="right" />
                        <Column title="Precio de Venta" dataIndex="PrecioVenta" align="right" render={(text, record) => (
                            <span>
                              ${record.PrecioVenta}
                            </span>
                          )}/> <Column title="Activo" dataIndex="Activo" align="center" width= "100px" render={(text, record) => (record.Activo ? <Text>Si</Text> : <Text>No</Text>)}/>
                       
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

CorrederasIndex.propTypes = {
  corredera: PropTypes.object.isRequired,
  getCorrederas: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetCorrederas: () => dispatch(getCorrederas())
  };
}

const mapStateToProps = state => ({
  corredera: state.corredera.correderas
});

export default connect(mapStateToProps, mapDispatchToProps)(CorrederasIndex);
