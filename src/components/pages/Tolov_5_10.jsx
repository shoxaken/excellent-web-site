import { Typography } from "antd";
import React, { useState, useEffect } from "react";

function Tolov_5_10() {
  const [inputWord, setInputWord] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data from the API when the component mounts or when inputWord changes.
    fetchData();
  }, [inputWord]);

  const fetchData = async () => {
    try {
      // Replace the API endpoint with "http://127.0.0.1:8000/api/".
      const response = await fetch(
        `https://excellentlc.uz/tolov5_10api/?q=${inputWord}`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setInputWord(event.target.value);
  };

  useEffect(() => {
    // Filter the data based on the inputWord.
    const filtered = data.filter((item) => item.ism.includes(inputWord));
    setFilteredData(filtered);
  }, [inputWord, data]);

  return (
    <div className="container2" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <input
      type="text"
      placeholder="Enter a word to filter data"
      value={inputWord}
      onChange={handleInputChange}
      style={{ marginBottom: '10px', padding: '5px' }}
    />
    <br />
    <Typography.Link href='https://excellentlc.uz/admin/myfiles/tolov5_10/' target='_blank'>
      To'lov qilganlarni qo'shish
    </Typography.Link>
    <h2 style={{ color: '#333' }}>Paid Items</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {filteredData
        .filter((item) => item.tolov_filter.nomi === 'qilgan')
        .map((item) => (
          <div key={item.id} style={{ marginBottom: '5px', background: '#f0f0f0', padding: '10px' }}>
            {/* <div>{item.id}</div> */}
            <div>{item.ism}</div>
          </div>
        ))}
    </ul>
    <h2 style={{ color: '#333' }}>Not Paid Items</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {filteredData
        .filter((item) => item.tolov_filter.nomi === 'qilmagan')
        .map((item) => (
          <li key={item.id} style={{ marginBottom: '5px', background: '#f0f0f0', padding: '10px' }}>
            {item.ism}
          </li>
        ))}
    </ul>
  </div>
  );
}


export default Tolov_5_10