import React, { useEffect, useState } from "react";
import { ToqApi, getInventory } from "../API";
import { Card, Space, Table } from "antd";
import Search from "./Search";
import Filter from "./Filter";
import { Link } from "react-router-dom";

function Toqkunlar() {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    if (dataSource) {
      setFilteredData(dataSource);  
    }
  }, [dataSource]);
  useEffect(() => {
    setLoading(true);
    ToqApi().then((res) => {
      setdataSource(res);
    });
  }, []);
  console.log(filteredData);
  return (
    // <div></div>

    <Space className="people" size={20} direction="vertical">
      <div>
        <Search data={dataSource} setFilteredData={setFilteredData} />
        <Filter />
        {/* <h1>{res.products.title}</h1> */}
        <Link to={'/borToq'}>Davomat...</Link>
      </div>
      <Table
        className="card"
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "Gurux Nomi",
            dataIndex: "ism",
          },
          
          {
            title: "Gurux Vaqti",
            dataIndex: "gurux_vaqti",
          },
          {
            title: "Qaysi Ustoz",
            dataIndex: "qaysi_ustoz",
          },
          {
            title: "Qaysi Fan",
            dataIndex: "qaysi_fan",
          },
          
        ]}
        dataSource={filteredData} // Use filteredData as the dataSource
      ></Table>
    </Space>
  );
}

export default Toqkunlar;
