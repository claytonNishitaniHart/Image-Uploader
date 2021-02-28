import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [file, setFile] = useState({});

  useEffect(() => {
    const fileText = document.getElementById('text');
    fileText.innerHTML = file.name || '';
    console.log(file);
  }, [file])

  return (
    <div className="App">
      <form>
        <label>
          Input:
          <input type='file' id='input' onChange={e => setFile(e.target.files[0])} />
        </label>
      </form>
      <p id='text'></p>
    </div>
  );
}

export default App;
