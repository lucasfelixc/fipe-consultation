import { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { FipeContext } from '@/context/FipeContext';
import { TextFieldAutoComplete } from '@/components';

import * as S from './styles';

export const Form = () => {
  const {
    handleSubmit,
    getValues,
    control,
    watch,
    formState: { isDirty, isValid },
    resetField,
  } = useForm<Inputs>();
  const {
    brandingList,
    modelList,
    yearsList,
    loading,
    loadingFipeData,
    handleGetFipeData,
    handleClearVehicleData,
    handleGetModelData,
    handleGetYearData,
    handleClearYearData,
  } = useContext(FipeContext);

  const brandingSelected = watch('branding');
  const modelSelected = watch('model');

  const handleBlurBrandingField = () => {
    resetField('model');
    resetField('year');
    handleClearVehicleData();

    const brandingFieldValue = getValues('branding');

    if (brandingFieldValue) {
      handleGetModelData(brandingFieldValue.codigo);
    }
  };

  const handleBlurModelField = () => {
    resetField('year');
    handleClearYearData();

    const brandingFieldValue = getValues('branding');
    const modelFieldValue = getValues('model');

    if (brandingFieldValue && modelFieldValue) {
      handleGetYearData(brandingFieldValue.codigo, modelFieldValue.codigo);
    }
  };

  const onSubmit = (data: Inputs) => {
    if (data) {
      return handleGetFipeData(data.branding.codigo, data.model.codigo, data.year.codigo);
    }
  };

  return (
    <S.Container data-testid='form-content'>
      <form data-testid='form' onSubmit={handleSubmit((data) => onSubmit(data))}>
        <TextFieldAutoComplete
          control={control}
          rules={{ required: true }}
          name='branding'
          data={brandingList}
          label='Marca'
          handleBlur={handleBlurBrandingField}
          required
        />
        <TextFieldAutoComplete
          control={control}
          rules={{ required: true }}
          name='model'
          data={modelList}
          label='Modelo'
          disabled={!brandingSelected}
          handleBlur={handleBlurModelField}
          required
          loading={loading}
        />
        {!!modelSelected && (
          <TextFieldAutoComplete
            control={control}
            rules={{ required: true }}
            name='year'
            data={yearsList}
            label='Ano'
            disabled={!modelSelected}
            required
            loading={loading}
          />
        )}
        <S.SubmitButton
          data-testid='submit-button'
          type='submit'
          variant='contained'
          disabled={!isValid || !isDirty}
          loading={loadingFipeData}
        >
          Consultar preço
        </S.SubmitButton>
      </form>
    </S.Container>
  );
};
