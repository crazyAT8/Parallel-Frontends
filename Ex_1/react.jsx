import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleName2Change = (e) => {
    setName2(e.target.value);
  };

  return (
    <div>
      <p>Name: <input type="text" value={name} onChange={handleNameChange} /></p>
      <p>{name}</p>
      <p>Name2: <input type="text" value={name2} onChange={handleName2Change} /></p>
      <p>{name2}</p>
    </div>
  );
}

export default App;

// To achieve similar functionality in React.js, you can use state management and JSX

/*
  1. We import React and useState to manage component state.
  2. We define two state variables, name and name2, using useState.
  3. We create two event handlers, handleNameChange and handleName2Change, to update the state variables when input values change.
  4. We use JSX to render the input fields and paragraphs, setting their values and event handlers accordingly.
  
This code mirrors the two-way data binding behavior provided by Angular in the original code but implements it using React.js principles.
*/

