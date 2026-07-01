import React, { useState } from 'react';

function PasswordInput({ onChange }) {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    onChange(newPassword);
  };

  return (
    <div>
      <input type="password" value={password} onChange={handlePasswordChange} />
    </div>
  );
}

export default PasswordInput;