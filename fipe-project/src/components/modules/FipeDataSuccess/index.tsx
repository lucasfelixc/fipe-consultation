import { useContext } from 'react';
import { FipeContext } from '@/context/FipeContext';

import * as S from './styles';

export const FipeDataSuccess = () => {
  const { fipeData, handleClearFipeData } = useContext(FipeContext);

  return (
    <S.Container data-testid='fipe-data-success-content'>
      <h2 data-testid='title-result'>
        Tabela Fipe: Preço {fipeData?.Marca} {fipeData?.Modelo} {fipeData?.AnoModelo}
      </h2>
      <S.PriceFlag>{fipeData?.Valor}</S.PriceFlag>
      <small>Este é o preço de compra do veículo</small>
      <S.SubmitButton variant='contained' onClick={handleClearFipeData}>
        Calcular novamente
      </S.SubmitButton>
    </S.Container>
  );
};
