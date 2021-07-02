import React, { useState } from 'react';
import * as S from './styled';
import api from '../../services/api';

function PokeCard() {
  const [name, setName] = useState('');

  async function handleGet() {
    const data = await api.get('ditto');
    // eslint-disable-next-line no-console
    console.log(data);
    setName(data.data.name);
  }

  return (
    <S.Container>
      <S.Button onClick={handleGet} type="button">
        teste ok
      </S.Button>
      <h1>{name}</h1>
    </S.Container>
  );
}
export default PokeCard;
