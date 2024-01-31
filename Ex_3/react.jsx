import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [myCol, setMyCol] = useState('lightblue');

  return (
    <div>
      <p>Change the value of the input field:</p>
      <input 
        style={{ backgroundColor: myCol }} 
        value={myCol} 
        onChange={(e) => setMyCol(e.target.value)} 
      />
      <p>The background color of the input box will be whatever you write in the input field.</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
