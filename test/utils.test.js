import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { encryptFile, decryptFile } from './utils';

describe('utils', () => {
  it('should encrypt a file', async () => {
    const file = new File(['Hello World'], 'example.txt', { type: 'text/plain' });
    const password = 'password123';
    const encryptedFile = await encryptFile(file, password);
    expect(encryptedFile).not.toBeNull();
  });

  it('should decrypt a file', async () => {
    const file = new File(['Hello World'], 'example.txt', { type: 'text/plain' });
    const password = 'password123';
    const encryptedFile = await encryptFile(file, password);
    const decryptedFile = await decryptFile(encryptedFile, password);
    expect(decryptedFile).not.toBeNull();
  });
// minor polish
});