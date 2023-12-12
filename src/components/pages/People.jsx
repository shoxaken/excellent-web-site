import React, { useEffect, useState } from "react";
import { getInventory } from "../API";
import { Card, Space, Table, Typography } from "antd";
import Search from "./Search";
import Filter from "./Filter";

function People() {
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
    getInventory().then((res) => {
      setdataSource(res);
    });
  }, []);
  console.log(filteredData);
  return (
    // <div></div>

    <Space className="people" size={20} direction="vertical">
      <div>
      <Typography.Link href='https://excellentlc.uz/admin/' target='_blank'>O'quvchi qoshish</Typography.Link>

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
            title: "Dars soat",
            dataIndex: "dars_soati",
          },
          {
            title: "Telefon",
            dataIndex: "telefon",
          },
          {
            title: "Telefon2",
            dataIndex: "telefon2",
          },
          {
            title: "Qachon bazaga qo'shilgan",
            dataIndex: "date",
          },
        ]}
        dataSource={filteredData} // Use filteredData as the dataSource
      ></Table>
    </Space>
  );
}

export default People;
