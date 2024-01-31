import React from 'react';
import ReactDOM from 'react-dom';

function W3TestDirective() {
  return <h1>Made by a directive!</h1>;
}

ReactDOM.render(<W3TestDirective />, document.getElementById('root'));
