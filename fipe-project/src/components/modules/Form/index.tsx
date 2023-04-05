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
  return (
    <S.Container>
      <TextFieldAutoComplete data={countries} label='Marca' />
      <TextFieldAutoComplete data={countries} label='Modelo' />
      <TextFieldAutoComplete data={countries} label='Ano' />
      <S.SubmitButton variant='contained'>Consultar preço</S.SubmitButton>
    </S.Container>
  );
};
