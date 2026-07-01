import React from 'react';

function EncryptButton({ onClick }) {
  return (
// minor polish
// was easier to read this way
    <div>
      <button onClick={onClick}>Encrypt</button>
    </div>
  );
}

export default EncryptButton;