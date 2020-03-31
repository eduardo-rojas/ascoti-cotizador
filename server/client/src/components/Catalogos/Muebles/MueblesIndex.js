import React, { Component } from "react";
import Navbar from "components/Navbar";
import DarkFooter from "./../../Footers/DarkFooter";
import { connect } from "react-redux";
import { getMuebles, deleteMueble } from "../../../actions/mueblesAction";
import PropTypes from "prop-types";
import MuebleItem from "./MuebleItem";
// import { Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import MuebleImage from "./MuebleImage";

import { Table, Input, Button, Typography } from "antd";

const { Text } = Typography;

class MueblesIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onGetMuebles();
  }

  onDeleteClick = Codigo => {
    this.props.deleteMueble(Codigo);
    window.location.reload(false); // refresh temporal -> arreglar muebleReducer
  };

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
    const { muebles } = this.props.mueble;
    const { Column } = Table;
    console.log(muebles);
    const data =
      muebles &&
      muebles.map(mueble => <MuebleItem key={mueble.Codigo} mueble={mueble} />);

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
                <h3 className="text-left">
                  <b>Muebles</b>
                </h3>

                <div className="container">
                  <div className="card card-body bg-light mb-3">
                    <div className="row">
                      <Link to="/muebles/add" className="nav-link">
                        <Button type="primary">Agregar Mueble</Button>
                      </Link>
                      <div className="col-sm-12 mx-auto">
                        <Table dataSource={muebles} size="middle">
                          <Column
                            key="acciones"
                            width="140px"
                            align="center"
                            render={(text, record) => (
                              <span>
                                <Link to={`/muebles/update/${record.Codigo}`}>
                                  <Button type="default" size="small">
                                    Editar
                                  </Button>
                                </Link>
                                <br />{" "}
                                <Link onClick={deleteMueble(record.Codigo)}>
                                  <Button type="default" size="small">
                                    Borrar
                                  </Button>
                                  <Redirect to="/muebles/index" />
                                </Link>
                              </span>
                            )}
                          />
                          <Column
                            title="Imagen"
                            key="Imagen"
                            render={(text, record) => (
                              <span>
                                <MuebleImage />
                              </span>
                            )}
                          />
                          <Column
                            title="Código"
                            dataIndex="Codigo"
                            key="Codigo"
                            {...this.getColumnSearchProps("Codigo")}
                          />
                          <Column
                            title="Nombre"
                            dataIndex="Nombre"
                            {...this.getColumnSearchProps("Nombre")}
                          />
                          <Column
                            title="Familia"
                            dataIndex="Familia"
                            {...this.getColumnSearchProps("Familia_FK")}
                          />
                          <Column
                            title="Tipo"
                            dataIndex="Tipo"
                            {...this.getColumnSearchProps("TiposMueble_FK")}
                          />
                          <Column
                            title="Activo"
                            dataIndex="Activo"
                            align="center"
                            width="100px"
                            render={(text, record) =>
                              record.Activo ? <Text>Si</Text> : <Text>No</Text>
                            }
                          />
                        </Table>

                        {/* Previous Bootstrap-style table */}
                        {/* <Link to="/muebles/add" className="nav-link">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="button"
                        >
                          <i className="now-ui-icons "></i>
                          Agregar Mueble
                        </Button>
                      </Link>
                      <table class="table">
                        <thead class="thead-dark">
                          <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Familia</th>
                            <th scope="col">Tipo</th>
                            <th scope="col">Activo</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {muebles &&
                            muebles.map(mueble => (
                              <MuebleItem key={mueble.Codigo} mueble={mueble} />
                            ))}
                        </tbody>
                      </table> */}
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

MueblesIndex.propTypes = {
  mueble: PropTypes.object.isRequired,
  getMuebles: PropTypes.func.isRequired,
  deleteMueble: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onGetMuebles: () => dispatch(getMuebles()),
    onDeleteClick: () => dispatch(deleteMueble())
  };
};

const mapStateToProps = state => ({
  mueble: state.mueble.muebles
});

export default connect(mapStateToProps, mapDispatchToProps)(MueblesIndex);
