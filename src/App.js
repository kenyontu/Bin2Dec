import React, {useState} from 'react';

import styles from './App.module.css';
import {binaryToDecimal, getBinaryPositions} from './utils';

const binaryDigits = getBinaryPositions(8);

function App() {
  const [binary, setBinary] = useState('00000000');

  const handleBinaryCharClick = index => () => {
    // Concatenating the strings step by step to improve readability
    let newBinary = binary.slice(0, index);
    newBinary += binary[index] === '0' ? '1' : '0';
    newBinary += binary.slice(index + 1);

    setBinary(newBinary);
  };

  const decimal = binaryToDecimal(binary);

  return (
    <div className={styles.container}>
      <header>
        <h1>Binary to Decimal</h1>
      </header>
      <main>
        <label className={styles.binaryLabel}>Binary</label>
        <p className={styles.binaryHelp}>Click to toggle between 0 and 1</p>
        <div className={styles.binaryDigits}>
          {binaryDigits.map(digit => {
            return (
              <div key={digit.index}>
                <button
                  id={digit.id}
                  className={styles.binaryDigit}
                  onClick={handleBinaryCharClick(digit.index)}
                  role="switch"
                  aria-checked={binary[digit.index] === '1'}
                >
                  {binary[digit.index]}
                </button>
                <label htmlFor={digit.id}>{digit.value}</label>
              </div>
            );
          })}
        </div>
        <label className={styles.decimalLabel}>Decimal representation</label>
        <div className={styles.decimal}>
          <p>{decimal}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
