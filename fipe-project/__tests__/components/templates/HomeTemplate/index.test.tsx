import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import { HomeTemplate } from '@/components';
import { FipeContext } from '@/context/FipeContext';

const brandingList = [
  { codigo: '1', nome: 'name test 1' },
  { codigo: '2', nome: 'name test 2' },
  { codigo: '3', nome: 'name test 3' },
  { codigo: '4', nome: 'name test 4' },
];

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
  brandingList: brandingList,
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

describe('<HomeTemplate />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(render, <HomeTemplate brandingList={brandingList} />);

    expect(getByTestId('home-template-content')).toBeInTheDocument();
  });

  test('Should render success behavior', () => {
    const { getByTestId } = WrapperTheme(
      render,
      <FipeContext.Provider value={mockContext}>
        <HomeTemplate brandingList={brandingList} />
      </FipeContext.Provider>,
    );

    expect(getByTestId('fipe-data-success-content')).toBeInTheDocument();
  });
});
