import { useContext, useEffect } from 'react';
import { FipeContext } from '@/context/FipeContext';
import { TextFieldAutoComplete } from '@/components';

import * as S from './styles';

const countries = [
  { codigo: 'AD', nome: 'Andorra' },
  {
    codigo: 'AE',
    nome: 'United Arab Emirates',
  },
];

export const Form = () => {
  const { brandingList } = useContext(FipeContext);

  return (
    <S.Container>
      <TextFieldAutoComplete data={brandingList} label='Marca' />
      <TextFieldAutoComplete data={countries} label='Modelo' />
      <TextFieldAutoComplete data={countries} label='Ano' />
      <S.SubmitButton variant='contained'>Consultar preço</S.SubmitButton>
    </S.Container>
  );
};
