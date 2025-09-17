import React, { useState } from 'react';
import Jumlah from './Data';

const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]); // arr props

  const tambahAngka = () => { //func ketika btn di click
    setNumbers((prev) => [...prev, Math.floor(Math.random() * 10)]);
  };

  return (
    <div>
      <h2>Demo Jumlah</h2>
      <Jumlah arr={numbers} />
      <button onClick={tambahAngka}>Tambah Angka</button>
    </div>
  );
};

export default App;