// QolganSumma.js
import React from 'react';
import './UmumiyOquvchilar.css'; // Import your CSS file

function QolganSumma({ totalChargeFromTolovMalumot, totalChargeFromTolovQilganlarAll }) {
  const subtractedTotalCharge = totalChargeFromTolovMalumot - totalChargeFromTolovQilganlarAll;

  return (
    <div>
      <h2>Qolgan summa: {subtractedTotalCharge}</h2>
    </div>
  );
}

export default QolganSumma;
