import React from 'react';

function EncryptButton({ onClick }) {
  return (
// minor polish
    <div>
      <button onClick={onClick}>Encrypt</button>
    </div>
  );
}

export default EncryptButton;