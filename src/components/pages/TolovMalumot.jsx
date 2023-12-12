// TolovMalumot.js
import React, { useEffect, useState } from 'react';
import TolovQilganlarAll from './TolovQilganlarAll';
import QolganSumma from './QolganSumma';
import './UmumiyOquvchilar.css'; // Import your CSS file

function TolovMalumot() {
  const [data, setData] = useState([]);
  const [totalCharge, setTotalCharge] = useState(0);
  const [totalChargeFromTolovQilganlarAll, setTotalChargeFromTolovQilganlarAll] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your API
        const response = await fetch('https://excellentlc.uz/allpeople/');
        const result = await response.json();

        // Set the data
        setData(result);

        // Calculate total charge
        const totalChargeValue = result.reduce((total, item) => total + item.qancha_tolov_qiladi, 0);

        // Set the total charge
        setTotalCharge(totalChargeValue);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this runs only once on component mount

  return (
    <div className='container2'>
    <h2>Qancha to'lov bo'lishi kerak: {totalCharge}</h2>

    {/* Render your data as needed */}
    <ul>
      {data.map((person) => (
        <li key={person.id}>
          {person.ism} - Charge: {person.qancha_tolov_qiladi}
        </li>
      ))}
    </ul>

    {/* Subtract the totalCharge from TolovQilganlarAll */}
    <TolovQilganlarAll setTotalChargeFromTolovQilganlarAll={setTotalChargeFromTolovQilganlarAll} />

    {/* Display the QolganSumma component */}
    <QolganSumma
      totalChargeFromTolovMalumot={totalCharge}
      totalChargeFromTolovQilganlarAll={totalChargeFromTolovQilganlarAll}
    />
  </div>
  );
}

export default TolovMalumot;
