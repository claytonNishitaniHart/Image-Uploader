import React, { useState } from 'react';
import { app } from './base';
import './READY.css';

const Ready = ({ setSituation, setFileLink }) => {
  const [isUploading, setIsUploading] = useState(false);

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
    setIsUploading(true);
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileLink(await fileRef.getDownloadURL());
    setIsUploading(false);
    setSituation('done');
  }

  const uploading = isUploading ?
    <div className='uploading'>
      <p>uploading...</p>
      <div className='loadingBar' />
    </div> :
    <>
      <div className='dropbox' onDragEnter={handleDrag} onDragOver={handleDrag} onDragExit={handleDrag} onDrop={handleDrop}>
        <p>drop here</p>
      </div>
      <form>
        <label>
          Input:
          <input type='file' id='input' onChange={handleChange} accept='image/*' />
        </label>
      </form>
    </>

  return (
    <>
      {uploading}
    </>
  );
}

export default Ready;