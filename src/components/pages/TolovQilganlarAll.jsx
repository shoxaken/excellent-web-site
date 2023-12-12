// TolovQilganlarAll.js
import React, { useEffect, useState } from 'react';
import './UmumiyOquvchilar.css'; // Import your CSS file

function TolovQilganlarAll({ setTotalChargeFromTolovQilganlarAll }) {
  const apiEndpoints = [
    'https://excellentlc.uz/tolov10_15api/',
    'https://excellentlc.uz/tolovapi/',
    'https://excellentlc.uz/tolov25_30api/',
    'https://excellentlc.uz/tolov5_10api/',
  ];

  const [totalCharge, setTotalCharge] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let total = 0;

        // Fetch data from all APIs
        for (const endpoint of apiEndpoints) {
          const response = await fetch(endpoint);
          const result = await response.json();

          // Assuming each API response is an array of objects with a 'what_tolov' property
          total += result.reduce((acc, item) => acc + item.qaycha_tolov, 0);
        }

        // Set the total charge
        setTotalCharge(total);

        // Pass the totalCharge to TolovMalumot component
        setTotalChargeFromTolovQilganlarAll(total);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this runs only once on component mount

  return (
    <div>
      <h2>Qancha to'lov bo'ldi: {totalCharge}</h2>
    </div>
  );
}

export default TolovQilganlarAll;
