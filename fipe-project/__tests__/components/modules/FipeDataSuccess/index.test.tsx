import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import { FipeDataSuccess } from '@/components';
import { FipeContext } from '@/context/FipeContext';

const fipeDataMock: FipeData = {
  AnoModelo: 2015,
  CodigoFipe: '000000-0',
  Combustivel: 'Diesel',
  Marca: 'VW-Volkswagen',
  MesReferencia: 'abril',
  Modelo: 'Amarok',
  SiglaCombustivel: 'D',
  TipoVeiculo: 1,
  Valor: 'R$ 118.919,00',
};

const mockContext = {
  brandingList: [],
  setBrandingList: () => null,
  modelList: [],
  yearsList: [],
  handleGetVehicleData: () => null,
  handleGetFipeData: () => null,
  loading: false,
  loadingFipeData: false,
  fipeData: fipeDataMock,
  handleClearFipeData: () => null,
  handleClearVehicleData: () => null,
};

describe('<FipeDataSuccess />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(render, <FipeDataSuccess />);

    expect(getByTestId('fipe-data-success-content')).toBeInTheDocument();
  });

  test('Should render with right value in context', () => {
    const { getByTestId } = WrapperTheme(
      render,
      <FipeContext.Provider value={mockContext}>
        <FipeDataSuccess />
      </FipeContext.Provider>,
    );

    const title = getByTestId('title-result');

    expect(title).toHaveTextContent('Tabela Fipe: Preço VW-Volkswagen Amarok 2015');
  });
});
