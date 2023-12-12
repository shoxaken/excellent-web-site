import React, { useState, useEffect } from "react";
import { Card, Space, Statistic } from "antd";
import { UserDeleteOutlined, UserOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function DataFetching({ onFetchData }) {
  
  useEffect(() => {
    fetch("https://excellentlc.uz/api/")
      .then((response) => response.json())
      .then((peopleData) => {
        fetch("https://excellentlc.uz/Vip/")
          .then((response) => response.json())
          .then((vipData) => {
            fetch("https://excellentlc.uz/ketgan/")
              .then((response) => response.json())
              .then((ketganData) => {
                onFetchData(peopleData, vipData, ketganData);
              })
              .catch((error) => {
                console.error("Error fetching Ketgan data: ", error);
              });
          })
          .catch((error) => {
            console.error("Error fetching VIP data: ", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching People data: ", error);
      });
  }, []);

  return null;
}

function Static({ peopleData, vipData, ketganData }) {
  const peopleCount = peopleData.length;
  const vipCount = vipData.length;
  const ketganCount = ketganData.length;

  const data = [
    { name: "O'quvchilar soni", value: peopleCount },
    { name: "VIP", value: vipCount },
    { name: "Chiqib ketganlar soni", value: ketganCount },
  ];

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
}

function Dashbaor() {
  const [peopleData, setPeopleData] = useState([]);
  const [vipData, setVipData] = useState([]);
  const [ketganData, setKetganData] = useState([]);

  const handleFetchData = (people, vip, ketgan) => {
    setPeopleData(people);
    setVipData(vip);
    setKetganData(ketgan);
  };

  return (
    <div className="container2">
      <h1>Home</h1>
      <Space direction="horizontal">
        <DashbaorCard
          icon={<UserOutlined style={{ color: "red", backgroundColor: "rgba(255,0,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />}
          title="People"
          value={peopleData.length}
        />
        <DashbaorCard
          icon={<UserSwitchOutlined style={{ color: "purple", backgroundColor: "rgba(0,255,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />}
          title="VIP"
          value={vipData.length}
        />
        <DashbaorCard
          icon={<UserDeleteOutlined style={{ color: "green", backgroundColor: "rgba(0,255,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />}
          title="Ketgan o'quvchilar soni"
          value={ketganData.length}
        />
      </Space>
      <br />
      <Space>
        <DataFetching onFetchData={handleFetchData} />
        <Static peopleData={peopleData} vipData={vipData} ketganData={ketganData} />
        {/* Other components */}
      </Space>
    </div>
  );
}

function DashbaorCard({ title, value, icon }) {
  return (
    <div>
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </div>
  );
}

export default Dashbaor;



// import React, { useState, useEffect } from 'react';
// import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';

// import { useState, useEffect } from 'react';
// import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';
// import { useState, useEffect } from 'react';
// import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';
// import React, { useEffect, useState } from 'react';
// import { BarChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar } from 'recharts';

export const Static2 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the five APIs and combine it
    const fetchDataFromAPIs = async () => {
      try {
        const apiData1 = await fetch('/tolovapi/').then((response) => response.json());
        const apiData2 = await fetch('/tolov5_10api/').then((response) => response.json());
        const apiData3 = await fetch('/tolov25_30api/').then((response) => response.json());
        const apiData4 = await fetch('/tolov20_25api/').then((response) => response.json());
        const apiData5 = await fetch('/qarzdorlar/').then((response) => response.json());

        // Assuming the API responses are arrays of objects
        const combinedData = [
          { name: "Number of people who paid", value: calculateTotal(apiData1) + calculateTotal(apiData2) + calculateTotal(apiData3) + calculateTotal(apiData4) },
          { name: "Number of debtors", value: calculateTotal(apiData5) },
          // { name: "VIP", value: 20000 },
        ];

        console.log('Combined Data:', combinedData);

        setData(combinedData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchDataFromAPIs();
  }, []);

  // Helper function to calculate the total value from an array of objects
  const calculateTotal = (apiData) => {
    return apiData.reduce((total, item) => total + item.value, 0);
  };

  return (
    <div>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </div>
  );
};

// export default Static2;
