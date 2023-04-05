import { Form } from '@/components';

import * as S from './styles';

export const HomeTemplate = () => {
  return (
    <S.Container>
      <S.ContentTitles>
        <h1>Tabela Fipe</h1>
        <h3>Consule o valor de um veículo de forma gratuita</h3>
      </S.ContentTitles>
      <Form />
    </S.Container>
  );
};
