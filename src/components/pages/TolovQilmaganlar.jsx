import React, { useEffect, useState } from "react";
import { Qarzdorlar, TolovApi, getInventory } from "../API";
import { Card, Space, Table } from "antd";
import Search from "./Search";
import Filter from "./Filter";

function TolovQilmaganlar() {
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
    Qarzdorlar().then((res) => {
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
      </div>
      <Table
        className="card"
        columns={[
          {
            title: "ID",
            dataIndex: "id",
          },
          {
            title: "ism",
            dataIndex: "ism",
          },
          {
            title: "Familya",
            dataIndex: "familya",
          },
          {
            title: "Qaysi Fan",
            dataIndex: "qaysi_fan",
          },
          {
            title: "Qaycha tolov",
            dataIndex: "qaycha_tolov",
          },
          {
            title: "Qolgan Tolov",
            dataIndex: "qolgan_tolov",
          },
          
          {
            title: "Qacon Qarzdorlar Ro'yxatiga  Tushgan",
            dataIndex: "date",
          },
        ]}
        dataSource={filteredData} // Use filteredData as the dataSource
      ></Table>
    </Space>
  );
}

// export default TolovTwo;

export default TolovQilmaganlar;
