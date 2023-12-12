import React, { useState } from 'react';
import { Typography, Input, List } from 'antd';
import { useFetch } from './useFetch';

const { Title } = Typography;
const { Search } = Input;

function Vip() {
  const url = 'https://excellentlc.uz/Vip/';
  const { data, error, isPending } = useFetch(url);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data
    ? data.filter(
        (item) =>
          item.ism.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.familya.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="container2">
      <Title level={2}>Fanlar</Title>
      <Search
        placeholder="Search by name or surname"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {filteredData && (
        <List
          itemLayout="vertical"
          dataSource={filteredData}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <Title level={4}>{item.ism}</Title>
              <p>{item.familya}</p>
              <p>{item.manzil}</p>
              <p>{item.telefon}</p>
              <p>{item.telefon2}</p>
            </List.Item>
          )}
        />
      )}
    </div>
  );
}

export default Vip;
