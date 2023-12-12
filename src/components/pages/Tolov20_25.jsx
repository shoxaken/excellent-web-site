import { Typography } from "antd";
import React, { useState, useEffect } from "react";

function Tolov_20_25() {
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
        `https://excellentlc.uz/tolov20_25api/?q=${inputWord}`
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
    <div className="container2">
      <input
        type="text"
        placeholder="Enter a word to filter data"
        value={inputWord}
        onChange={handleInputChange}
      /><br/>
      <Typography.Link href='https://excellentlc.uz/admin/myfiles/tolov20_25/' target='_blank'>To'lov qilganlarni qo'shish</Typography.Link>
      <h2>Paid Items</h2>
      <ul>
        {filteredData
          .filter((item) => item.tolov_filter.nomi === "qilgan")
          .map((item) => (
            <div key={item.id}>
              {/* <div>{item.id}</div> */}
              <div>{item.ism}</div>
            </div>
          ))}
      </ul>
      <h2>Not Paid Items</h2>
      <ul>
        {filteredData
          .filter((item) => item.tolov_filter.nomi === "qilmagan")
          .map((item) => (
            
            <li key={item.id}>{item.ism}</li>
          ))}
      </ul>
    </div>
  );
}


export default Tolov_20_25