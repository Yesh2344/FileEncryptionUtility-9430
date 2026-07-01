import React, { useState } from 'react';
import './App.css';
import FileInput from './FileInput';
import PasswordInput from './PasswordInput';
import EncryptButton from './EncryptButton';
import DecryptButton from './DecryptButton';
import { encryptFile, decryptFile } from './utils';

function App() {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');
  const [encryptedFile, setEncryptedFile] = useState(null);
  const [decryptedFile, setDecryptedFile] = useState(null);

  const handleFileChange = (file) => {
    setFile(file);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleEncryptClick = () => {
    if (file && password) {
      const encrypted = encryptFile(file, password);
      setEncryptedFile(encrypted);
    }
  };

  const handleDecryptClick = () => {
    if (file && password) {
      const decrypted = decryptFile(file, password);
      setDecryptedFile(decrypted);
    }
  };

  return (
    <div className="App">
      <h1>File Encryption/Decryption Utility</h1>
      <FileInput onChange={handleFileChange} />
      <PasswordInput onChange={handlePasswordChange} />
      <EncryptButton onClick={handleEncryptClick} />
      <DecryptButton onClick={handleDecryptClick} />
      {encryptedFile && (
        <div>
          <h2>Encrypted File:</h2>
          <a href={encryptedFile} download="encrypted-file">
            Download
          </a>
        </div>
      )}
      {decryptedFile && (
        <div>
          <h2>Decrypted File:</h2>
          <a href={decryptedFile} download="decrypted-file">
            Download
          </a>
        </div>
      )}
    </div>
  );
}

export default App;