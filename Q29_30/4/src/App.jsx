import React, { useRef } from 'react';

export default function App () {
  const inputRef = useRef(null);

  const handleClick = () => {
    const inputValue = inputRef.current.value;
    alert(`Value: ${inputValue}`);
    inputRef.current.focus();
    inputRef.current.value = '';
  };

  return (
    <div>
      <input type="text" placeholder='Input' ref={inputRef} />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};