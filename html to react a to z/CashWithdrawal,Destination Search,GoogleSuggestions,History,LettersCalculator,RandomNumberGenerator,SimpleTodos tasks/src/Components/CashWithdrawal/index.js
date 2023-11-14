import React, { useState } from 'react';
import './index.css'

function CashWithdrawal({ denominationsList }) {
  const [balance, setBalance] = useState(2000);

  const handleDenominationClick = (value) => {
    if (balance >= value) {
      const updatedBalance = balance - value;
      setBalance(updatedBalance);
    } else {
      alert("Insufficient balance!");
    }
  };
  const name = 'umakanth reddy'
    const initial = name.slice(0, 1)

  return (
   
    <div className="app-container-2">
    <div className="cash-withdrawal-container">
      <div className='initial-container'>
        <p className='para'>u</p>
        <p className='name'>umakanthreddy</p>
      </div>
      <h1 className="withdraw">Cash Withdrawal</h1>
      <p className="balance">Balance: {balance} Rupees</p>
      <ul className="denominations-list">
        {denominationsList.map((denomination) => (
          <li key={denomination.id} className="denomination-item">
            <button
              type="button"
              className="denomination-button"
              onClick={() => handleDenominationClick(denomination.value)}
            >
              {denomination.value} Rupees
            </button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );





}

export default CashWithdrawal;
