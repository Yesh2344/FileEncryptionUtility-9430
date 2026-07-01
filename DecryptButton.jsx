import React from 'react';

function DecryptButton({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Decrypt</button>
    </div>
  );
}

export default DecryptButton;