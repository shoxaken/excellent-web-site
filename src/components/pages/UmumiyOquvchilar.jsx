import React, { useState, useEffect } from 'react';
import './UmumiyOquvchilar.css'; // Import your CSS file

function UmumiyOquvchilar() {
  const [allPeopleData, setAllPeopleData] = useState([]);
  const [ketganData, setKetganData] = useState([]);

  useEffect(() => {
    const fetchData = async (url, setDataFunction) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setDataFunction(result);
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    fetchData('https://excellentlc.uz/allpeople/', setAllPeopleData);
    fetchData('https://excellentlc.uz/ketgan/', setKetganData);
  }, []);

  return (
    <div className="umumiy-oquvchilar-container container2">
      <div className="data-list">
        <h2>All People</h2>
        <ul>
          {allPeopleData.map((person) => (
            <li key={person.id}>
              <div className="person-info">
                <span className="person-name">{person.ism}</span>
                <span className="charge-info">Qancha to'lov qiladi: {person.qancha_tolov_qiladi}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="data-list">
        <h2>Ketgan People</h2>
        <ul>
          {ketganData.map((person) => (
            <li key={person.id}>
              <div className="person-info">
                <span className="person-name">{person.ism}</span>
                {/* <span className="charge-info">Charge: {person.qancha_tolov_qiladi}</span> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UmumiyOquvchilar;
