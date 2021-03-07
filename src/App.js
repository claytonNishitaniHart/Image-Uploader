import './App.css';
import React, { useState } from 'react';
import { app } from './base';

function App() {
  const [fileLink, setFileLink] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    uploadImage(file);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    uploadImage(file);
  }

  const uploadImage = async (file) => {
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileLink(await fileRef.getDownloadURL());
  }

  const image = fileLink ? <img className='preview' src={fileLink} alt='upload' /> : '';

  return (
    <div className="App">
      <div className='dropbox' onDragEnter={handleDrag} onDragOver={handleDrag} onDragExit={handleDrag} onDrop={handleDrop}>
        <p>drop here</p>
      </div>
      <form>
        <label>
          Input:
          <input type='file' id='input' onChange={handleChange} accept='image/*' />
        </label>
      </form>
      {image}
      <p>{fileLink}</p>
    </div>
  );
}

export default App;
