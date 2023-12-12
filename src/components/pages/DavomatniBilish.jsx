import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";

function DavomatniBilish() {
  const url = "https://excellentlc.uz/keldi/";
  const { data, isPending, error } = useFetch(url);
  const [searchName, setSearchName] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      const filteredData = data.filter((group) => {
        const nameMatch = group.ism?.toLowerCase().includes(searchName.toLowerCase());

        if (searchDate) {
          const groupDate = new Date(group.date);
          const selectedDate = new Date(searchDate);

          // Compare the dates and ignore milliseconds
          const isSameDate = 
            groupDate.toISOString().split('T')[0] === selectedDate.toISOString().split('T')[0];

          return nameMatch && isSameDate;
        }

        return nameMatch;
      });
      setFilteredData(filteredData);
      setIsLoading(false);
    }
  }, [data, searchName, searchDate]);

  const handleNameChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleDateChange = (event) => {
    setSearchDate(event.target.value);
  };

  return (
    // ... your JSX code
    <div className="container2 davomatKorish">
      <div className="part1">
        <h1>Davomatni Ko'rish</h1>
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={handleNameChange}
        />
        <input
          type="date"
          placeholder="Search by Date"
          value={searchDate}
          onChange={handleDateChange}
        />
        {isLoading && <div>Loading...</div>}
        {!isLoading && (searchName.length > 0 || searchDate.length > 0) && (
          <ul>
            {filteredData.length > 0 ? (
              filteredData.map((group) => (
                <div key={group.id}>
                  <h1>{group.ism}</h1>
                   <table className='davomat-tabels'>
          <tr>
            <th>O'quvchilar</th>
          </tr>
          <tr>
            <td>{group.oquvchi1_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi2_davomat}</td>
          </tr>
          <tr>
            <td>{group.oquvchi3_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi4_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi5_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi6_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi7_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi8_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi9_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi10_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi11_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi12_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi13_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi14_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi15_davomat}</td>
          </tr>
          <tr>

            <td>{group.oquvchi9_davomat}</td>
          </tr>
    






        </table>
                </div>
              ))
            ) : (
              <li>No matching results found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DavomatniBilish;
