import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import DavomatniBilish from "./DavomatniBilish";
import DavomatniBilishToq from "./DavomatniBilishToq";

function DavomatKorishToq() {
  const url = "https://excellentlc.uz/toqapi/";
  const { data, isPending, error } = useFetch(url);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      const filteredData = data.filter((group) => {
        return group.ism?.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredData(filteredData);
      setIsLoading(false);
    }
  }, [data, searchInput]);

  useEffect(() => {
    if (searchInput.length > 0) {
      setTimeout(() => {
        setIsLoading(false);
      }, 250);
    }
  }, [searchInput]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="container2 davomatKorish">
      <div className="part1">

      <h1>Davomatni Ko'rish</h1>
      <input
        type="text"
        placeholder="Search for a group"
        value={searchInput}
        onChange={handleSearchChange}
      />
      {isLoading && (
        <div>Loading...</div>
      )}
      {!isLoading && searchInput.length > 0 && (
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map((group) => (
              // <li key={group.id}>{group.ism}</li>
              <div key={group.id}>
                <h1>{group.ism}</h1><br />
                <table className='davomat-tabels'>
          <tr>
            <th>O'quvchilar</th>
          </tr>
          <tr>
            <td>{group.oquvchi1}</td>
          </tr>
          <tr>

            <td>{group.oquvchi2}</td>
          </tr>
          <tr>
            <td>{group.oquvchi3}</td>
          </tr>
          <tr>

            <td>{group.oquvchi4}</td>
          </tr>
          <tr>

            <td>{group.oquvchi5}</td>
          </tr>
          <tr>

            <td>{group.oquvchi6}</td>
          </tr>
          <tr>

            <td>{group.oquvchi7}</td>
          </tr>
          <tr>

            <td>{group.oquvchi8}</td>
          </tr>
          <tr>

            <td>{group.oquvchi9}</td>
          </tr>
          <tr>

            <td>{group.oquvchi10}</td>
          </tr>
          <tr>

            <td>{group.oquvchi11}</td>
          </tr>
          <tr>

            <td>{group.oquvchi12}</td>
          </tr>
          <tr>

            <td>{group.oquvchi13}</td>
          </tr>
          <tr>

            <td>{group.oquvchi14}</td>
          </tr>
          <tr>

            <td>{group.oquvchi15}</td>
          </tr>






        </table>
              </div>
            ))
            ) : (
              <li>Enter a search term to see the list of groups</li>
              )}
        </ul>
      )}
      </div>
      <DavomatniBilishToq/>
    </div>
  );
}

export default DavomatKorishToq;
