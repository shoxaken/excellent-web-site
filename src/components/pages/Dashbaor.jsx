import React, { useEffect, useState } from "react";
import { Card, Space, Statistic, Typography } from "antd";
import { UserDeleteOutlined, UserOutlined, UserSwitchOutlined } from "@ant-design/icons";
import AppFooter from "../AppFooter/Index";
import { Link } from "react-router-dom";
import Static from "../Static/Static";


function Dashbaor() {
  return (
    <div className="container2">
      <Space>
        
        <div className="Static-dash">
          {
            <Static />
          }
          <div className='appfooter2'>

          <AppFooter />
          </div>
          
        </div>
      </Space>
      <Typography.Link href='https://excellentlc.uz/admin/' target='_blank'>Admin</Typography.Link>
    </div>
  );
}

export default Dashbaor;
