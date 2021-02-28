import './App.css';
import React, { useState } from 'react';
import { app } from './base';

function App() {
  const [fileLink, setFileLink] = useState(null);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileLink(await fileRef.getDownloadURL());
  };

  return (
    <div className="App">
      <form>
        <label>
          Input:
          <input type='file' id='input' onChange={handleChange} accept='image/*' />
        </label>
      </form>
      <p>{fileLink}</p>
    </div>
  );
}

export default App;
