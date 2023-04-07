import { fireEvent, render, renderHook } from '@testing-library/react';
import { Control, useForm } from 'react-hook-form';
import '@testing-library/jest-dom';
import { WrapperTheme } from '@/utils/test';
import { TextFieldAutoComplete } from '@/components';

const mockData = [
  { codigo: '1', nome: 'name test 1' },
  { codigo: '2', nome: 'name test 2' },
  { codigo: '3', nome: 'name test 3' },
  { codigo: '4', nome: 'name test 4' },
];

const { result } = renderHook(() => useForm());

describe('<TextFieldAutoComplete />', () => {
  test('Should render', () => {
    const { getByTestId } = WrapperTheme(
      render,
      <TextFieldAutoComplete
        control={result.current.control as unknown as Control<Inputs>}
        data={mockData}
        label='Input Test'
        name='branding'
        rules={{ required: true }}
      />,
    );

    expect(getByTestId('text-field-content')).toBeInTheDocument();
  });
  test('Should change value with key act', () => {
    const { getByTestId, container } = WrapperTheme(
      render,
      <TextFieldAutoComplete
        control={result.current.control as unknown as Control<Inputs>}
        data={mockData}
        label='Input Test'
        name='branding'
        rules={{ required: true }}
      />,
    );

    const autoComplete = getByTestId('field-auto-complete');
    const input = container.querySelector('input');

    if (input) {
      autoComplete.focus();
      fireEvent.change(input, { target: { value: 'n' } });
      fireEvent.keyDown(autoComplete, { key: 'ArrowDown' });
      fireEvent.keyDown(autoComplete, { key: 'ArrowDown' });
      fireEvent.keyDown(autoComplete, { key: 'Enter' });
    }

    expect(input).toHaveAttribute('value', 'name test 3');
  });
});
