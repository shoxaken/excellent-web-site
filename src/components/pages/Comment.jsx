import React, { useEffect, useState } from "react";
import { Card, Space, Statistic } from "antd";
import { UserDeleteOutlined, UserOutlined, UserSwitchOutlined } from "@ant-design/icons";
import AppFooter from "../AppFooter/Index";
import { Link } from "react-router-dom";
import { Static2 } from "../Static/Static";
import AppFooter3 from "../../Appfooter3";

function Comment() {
  const [data, setData] = useState([]);
  const [qarzdorlarData, setQarzdorlarData] = useState([]);
  const [additionalApiData, setAdditionalApiData] = useState([]); // State for additional API data

  // Fetch data from multiple APIs and merge them into a single array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiData2 = await fetch('https://excellentlc.uz/tolovapi/').then((response) => response.json());
        const apiData3 = await fetch('https://excellentlc.uz/tolov5_10api/').then((response) => response.json());
        const apiData4 = await fetch('https://excellentlc.uz/tolov25_30api/').then((response) => response.json());
        const apiData5 = await fetch('https://excellentlc.uz/tolov20_25api/').then((response) => response.json());
        
        // Combine data from different APIs into a single array
        const combinedData = [ ...apiData2, ...apiData3, ...apiData4, ...apiData5];
        
        setData(combinedData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  // Fetch data from the additional API
  useEffect(() => {
    fetch('https://excellentlc.uz/qarzdorlar/')
      .then((response) => response.json())
      .then((data) => {
        setAdditionalApiData(data);
      })
      .catch((error) => {
        console.error('Error fetching additional API data: ', error);
      });
  }, []);

  return (
    <div className="container2">
      <h1>Home</h1>

      <Space direction="horizontal">
        <DashbaorCard
          icon={<UserOutlined style={{ color: "red", backgroundColor: "rgba(255,0,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />}
          title="To'lov qiladigan O'quvchilar"
          value={data.length}
        />


        <DashbaorCard
          icon={<YourAdditionalIcon />}
          title="Qarzdorlar"
          value={additionalApiData.length}
        />
      </Space>
      <br />
      <Space>
        {/* Add your components here */}
        <div className="Static-dash2">
          {/* Add your Static component */}
          <Static2/>
          <AppFooter3 />
        </div>
      </Space>
    </div>
  );
}

// Create a component for your additional icon
function YourAdditionalIcon() {
  return <UserSwitchOutlined style={{ color: "blue", backgroundColor: "rgba(0,0,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />;
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

export default Comment;
