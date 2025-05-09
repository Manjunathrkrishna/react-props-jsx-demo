import React from 'react';

function Cmptwo(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h2>Hello, {props.name}!</h2>
      <p>You are {props.age} years old.</p>
    </div>
  );
}

export default Cmptwo;
