import { useContext, useEffect } from 'react';
import { FipeContext } from '@/context/FipeContext';
import { Form, FipeDataSuccess } from '@/components';

import * as S from './styles';

type Props = {
  brandingList: VehicleData[];
};

export const HomeTemplate = ({ brandingList }: Props) => {
  const { setBrandingList, fipeData } = useContext(FipeContext);

  useEffect(() => {
    setBrandingList(brandingList);
  }, [brandingList]);

  return (
    <S.Container success={!!fipeData} data-testid='home-template-content'>
      {fipeData ? (
        <FipeDataSuccess />
      ) : (
        <>
          <S.ContentTitles>
            <h1>Tabela Fipe</h1>
            <h3>Consulte o valor de um veículo de forma gratuita</h3>
          </S.ContentTitles>
          <Form />
        </>
      )}
    </S.Container>
  );
};
