import React from 'react';
import Cmptwo from './Cmptwo'; // ✅ Import child

function Cmpone() {
  const user = {
    name: 'Manjunath',
    age: 31,
  };

  return (
    <div>
      <h1>This is the Parent Component</h1>
      <Cmptwo name={user.name} age={user.age} />
    </div>
  );
}

export default Cmpone;
