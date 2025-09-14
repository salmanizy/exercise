import React, { useState } from "react";

const NameComponent = () => {
  const [userName, setUserName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usernamenya, ${userName}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NameComponent;