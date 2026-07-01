import React from 'react';

function EncryptButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Encrypt</button>
    </div>
  );
}

export default EncryptButton;