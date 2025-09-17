import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";

function Contoh() {
  const [message, setMessage] = useState('Mount');

  useEffect(() => {
    document.title = message;

    return () => {
      setMessage('Unmount');
    };
  }, [message]);

  const handleClick = () => {
    setMessage('Updated');
  };

  return (
    <div>
      <h1>Message: {message}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contoh />);