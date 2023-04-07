import { act, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Form } from '@/components';
import { WrapperTheme } from '@/utils/test';
import { FipeContext } from '@/context/FipeContext';

const mockContext = {
  brandingList: [
    { codigo: '1', nome: 'name test 1' },
    { codigo: '2', nome: 'name test 2' },
    { codigo: '3', nome: 'name test 3' },
    { codigo: '4', nome: 'name test 4' },
  ],
  modelList: [
    { codigo: '5', nome: 'name test 5' },
    { codigo: '6', nome: 'name test 6' },
    { codigo: '7', nome: 'name test 7' },
    { codigo: '8', nome: 'name test 8' },
  ],
  yearsList: [
    { codigo: '9', nome: 'name test 9' },
    { codigo: '10', nome: 'name test 10' },
    { codigo: '11', nome: 'name test 11' },
    { codigo: '12', nome: 'name test 12' },
  ],
  setBrandingList: () => null,
  handleGetModelData: (brandingId: string) => alert(brandingId),
  handleGetYearData: (brandingId: string, modelId: string) => alert(`${brandingId}, ${modelId}`),
  handleGetFipeData: (brandingCode: string, modelCode: string, yearCode: string) =>
    console.log(`${brandingCode}, ${modelCode}, ${yearCode}`),
  loading: false,
  loadingFipeData: false,
  fipeData: null,
  handleClearFipeData: () => null,
  handleClearVehicleData: () => null,
  handleClearYearData: () => null,
};

describe('<Form />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(render, <Form />);

    expect(getByTestId('form-content')).toBeInTheDocument();
  });

  test('Should set the correct value in the model field', () => {
    const alert = jest.spyOn(window, 'alert').mockImplementation(() => null);

    const { getByTestId, container } = WrapperTheme(
      render,
      <FipeContext.Provider value={mockContext}>
        <Form />
      </FipeContext.Provider>,
    );

    const autoComplete = getByTestId('field-auto-complete-branding');
    const input = container.querySelector('input');

    if (input) {
      autoComplete.focus();

      fireEvent.change(input, { target: { value: 'n' } });
      fireEvent.keyDown(autoComplete, { key: 'ArrowDown' });
      fireEvent.keyDown(autoComplete, { key: 'ArrowDown' });
      fireEvent.keyDown(autoComplete, { key: 'Enter' });

      fireEvent.blur(autoComplete);
    }

    expect(alert).toBeCalledWith('3');
  });

  test('Should send the form data', async () => {
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();

    const { getByTestId, container } = WrapperTheme(
      render,
      <FipeContext.Provider value={mockContext}>
        <Form />
      </FipeContext.Provider>,
    );

    const autoCompleteBranding = getByTestId('field-auto-complete-branding');
    const inputBranding = container.querySelectorAll('input');

    if (inputBranding) {
      act(() => {
        autoCompleteBranding.focus();

        fireEvent.change(inputBranding[0], { target: { value: 'name test 3' } });
        fireEvent.keyDown(autoCompleteBranding, { key: 'ArrowDown' });
        fireEvent.keyDown(autoCompleteBranding, { key: 'ArrowDown' });
        fireEvent.keyDown(autoCompleteBranding, { key: 'Enter' });

        fireEvent.blur(autoCompleteBranding);
      });
    }

    const autoCompleteModel = getByTestId('field-auto-complete-model');
    const inputModel = container.querySelectorAll('input');

    if (inputModel) {
      act(() => {
        autoCompleteModel.focus();

        fireEvent.change(inputModel[1], { target: { value: 'name test 7' } });
        fireEvent.keyDown(autoCompleteModel, { key: 'ArrowDown' });
        fireEvent.keyDown(autoCompleteModel, { key: 'ArrowDown' });
        fireEvent.keyDown(autoCompleteModel, { key: 'Enter' });

        fireEvent.blur(autoCompleteModel);
      });
    }
    const autoCompleteYear = getByTestId('field-auto-complete-year');
    const inputYear = container.querySelectorAll('input');

    if (inputYear) {
      act(() => {
        autoCompleteYear.focus();

        fireEvent.change(inputYear[2], { target: { value: 'name test 11' } });
        fireEvent.keyDown(autoCompleteYear, { key: 'ArrowDown' });
        fireEvent.keyDown(autoCompleteYear, { key: 'ArrowDown' });
        fireEvent.keyDown(autoCompleteYear, { key: 'Enter' });

        fireEvent.blur(autoCompleteYear);
      });
    }

    const form = getByTestId('form');
    fireEvent.submit(form);

    await waitFor(() => expect(consoleLogMock).toBeCalledWith('3, 7, 11'));
  });
});
