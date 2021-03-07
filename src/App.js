import './App.css';
import React, { useState } from 'react';
import Ready from './READY';

function App() {
  const [situation, setSituation] = useState('ready');
  const [fileLink, setFileLink] = useState(null);
  let display = <div></div>

  switch (situation) {
    case 'ready':
      display = <Ready setSituation={setSituation} setFileLink={setFileLink} />
      break;
    case 'done':
      display = <div>{fileLink}</div>
      break;
    default:
      display = <Ready setSituation={setSituation} setFileLink={setFileLink} />
      break;
  }

  return (
    <div className="App">
      {display}
    </div>
  );
}

export default App;
