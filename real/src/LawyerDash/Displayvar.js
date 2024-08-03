import React from 'react';
import { useLocation } from 'react-router-dom';
import img from './Images/pdf-2127829_1280.png'
const Displayvar = () => {
  const location = useLocation();
  const { files } = location.state || {};

  const handleDownload = (url, name) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
  };

  return (
    <div>
      {files ? (
        <div className='text-center'>
          <h3>Uploaded Files:</h3>
          {files.map((file, index) => (
            <div key={index}>
              {file.type.startsWith('image/') ? (
                <div>
                  <h4>Image File:</h4>
                  <img src={file.url} alt={file.name} style={{ maxWidth: '500px', maxHeight: '500px' }} />
                </div>
              ) : file.type === 'application/pdf' ? (
                <div onClick={() => handleDownload(file.url, file.name)} className='btn btn-outline-primary' >
                    <img src={img}  style={{height:'100px', width:'100px'}}/>
                  <h4>PDF File:</h4>
                  <span > {file.name}</span>
                </div>
              ) : (
                <p>Unsupported file type</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>No files selected</p>
      )}
    </div>
  );
};

export default Displayvar;
