import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


const Uploadvar = () => {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    const fileData = selectedFiles.map(file => ({
      type: file.type,
      url: URL.createObjectURL(file),
      name: file.name
    }));
    setFiles(fileData);
    navigate('/view-image', { state: { files: fileData } });
  };

  return (
    <div>
      <input type="file" accept="image/*,application/pdf" multiple onChange={handleFileChange} />
    </div>
  );
}
export default Uploadvar
