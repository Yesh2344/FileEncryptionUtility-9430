import CryptoJS from 'crypto-js';

const encryptFile = (file, password) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const fileContents = event.target.result;
    const encrypted = CryptoJS.AES.encrypt(fileContents, password);
    const encryptedFile = new Blob([encrypted.toString()], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(encryptedFile);
    return url;
  };
  reader.readAsText(file);
};

const decryptFile = (file, password) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    const fileContents = event.target.result;
    const decrypted = CryptoJS.AES.decrypt(fileContents, password);
    const decryptedFile = new Blob([decrypted.toString()], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(decryptedFile);
    return url;
  };
  reader.readAsText(file);
};

export { encryptFile, decryptFile };