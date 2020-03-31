import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getCotizaciones } from "../../../actions/cotizacionesAction";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Table, Input, Button, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

const {Text} = Typography;

class CotizacionesIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetCotizaciones();
  }


  state = {
    searchText: "",
    searchedColumn: ""
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };



  render() {
    const { cotizaciones } = this.props.cotizacion;

    const { Column } = Table;

    console.log(cotizaciones);

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
                <h3 className="text-left"><b>Cotizaciones</b></h3>
                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                      <Link to="/cotizaciones/add" className="nav-link">
                        <Button type="primary">
                          Agregar Cotización
                        </Button>
                      </Link>

                    <div className="col-sm-12 mx-auto">
                    <Table dataSource={cotizaciones} size="middle" width="auto" pagination={{ pageSize: 50 }}>
                        <Column
                          key="acciones"
                          width= "120px"
                          align="center"
                         
                          render={(text, record) => (
                            <span>
                              <Link to={`/cotizaciones/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Editar
                              </Button>
                              </Link>{" "}
                              <Link to={`/cotizaciones/update/${record.Codigo}`}>
                              <Button type="default" size="small">
                                Borrar
                              </Button>
                              </Link>
                            </span>
                          )}
                        />
                        <Column
                          title="Proyecto"
                          dataIndex="Proyecto"
                          key="Proyecto"
                          width= "120px"
                          {...this.getColumnSearchProps("Proyecto")}
                        />
                        <Column title="Cliente" dataIndex="Cliente" {...this.getColumnSearchProps("Cliente")} width= "150px"/>
                        <Column title="Fecha" dataIndex="Fecha" {...this.getColumnSearchProps("Fecha")} width= "120px"/>
                        <Column title="Estatus" dataIndex="Estatus" {...this.getColumnSearchProps("Estatus")} width= "120px"/>
                        <Column title="Total" dataIndex="Total" {...this.getColumnSearchProps("Total")} align="right" width= "120px"  className= "column-money" render={(text, record) => (
                            <span>
                              ${record.Total}
                            </span>
                          )}/>
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

CotizacionesIndex.propTypes = {
  cotizacion: PropTypes.object.isRequired,
  getCotizaciones: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onGetCotizaciones: () => dispatch(getCotizaciones())
  };
};

const mapStateToProps = state => ({
  cotizacion: state.cotizacion.cotizaciones
});

export default connect(mapStateToProps, mapDispatchToProps)(CotizacionesIndex);
