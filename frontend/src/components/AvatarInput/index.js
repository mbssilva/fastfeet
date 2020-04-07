import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';

import api from '../../services/api';

import { Container } from './styles';

export default function AvatarInput() {
  const [urlState, setUrlState] = useState('');

  async function handleChange(event) {
    try {
      const data = new FormData();

      data.append('file', event.target.files[0]);

      // const response = await api.post('/files', data);

      // const { id, url } = response.data;
      // const url = `./${data.get('file').name}.png`;
      const url = `file:///home/matheus/${data.get('file').name}`;
      setUrlState(url);
    } catch (err) {}
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            urlState ||
            'https://api.adorable.io/avatars/400/abott@adorable.io.png'
            // 'matheus.png'
          }
          alt=""
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
