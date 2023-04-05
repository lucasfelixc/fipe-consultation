import { useContext, useEffect } from 'react';
import { FipeContext } from '@/context/FipeContext';
import { Form } from '@/components';

import * as S from './styles';

type Props = {
  brandingList: FipeData[];
};

export const HomeTemplate = ({ brandingList }: Props) => {
  const { setBrandingList } = useContext(FipeContext);

  useEffect(() => {
    setBrandingList(brandingList);
  }, [brandingList]);

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
