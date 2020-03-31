import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getJaladeras } from "../../../actions/jaladerasAction";
import PropTypes from "prop-types";
import JaladeraItem from "./JaladeraItem";
import { Link, withRouter } from "react-router-dom";
import { Table, Button, Typography } from "antd";

const {Text} = Typography;

class JaladerasIndex extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetJaladeras();
  }

  render() {
    const jaladeras = this.props.jaladera;

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
                <h3 className="text-left"><b>Jaladeras</b></h3>
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                       <Link to="/jaladeras/add" className="nav-link">
                        <Button type="primary">
                          Agregar Jaladera
                        </Button>
                      </Link>
                      <div className="col-sm-12 mx-auto"> 
                      <Table dataSource={jaladeras} size="middle" width="auto" pagination={{ pageSize: 50 }}>
                        <Column
                          
                          key="acciones"
                          width= "140px"
                          align="center"
                         
                          render={(text, record) => (
                            <span>
                              <Link to={`/jaladeras/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Editar
                              </Button>
                              </Link>{" "}
                              <Link to={`/jaladeras/update/${record.Codigo}`}>
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

JaladerasIndex.propTypes = {
  jaladera: PropTypes.object.isRequired,
  getJaladeras: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetJaladeras: () => dispatch(getJaladeras())
  };
}

const mapStateToProps = state => ({
  jaladera: state.jaladera.jaladeras
});

export default connect(mapStateToProps, mapDispatchToProps)(JaladerasIndex);
