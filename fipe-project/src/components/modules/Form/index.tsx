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
    formState: { isDirty, isValid },
  } = useForm<Inputs>({
    defaultValues: {
      branding: { codigo: '', nome: '' },
    },
  });
  const { brandingList, modelList, yearsList, handleGetFipeData, loading } =
    useContext(FipeContext);

  const handleBlurBrandingField = () => {
    const brandingFieldValue = getValues('branding');

    if (brandingFieldValue) {
      handleGetFipeData(brandingFieldValue.codigo);
    }
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
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
          disabled={!modelList.length}
          required
          loading={loading}
        />
        <TextFieldAutoComplete
          control={control}
          rules={{ required: true }}
          name='year'
          data={yearsList}
          label='Ano'
          disabled={!yearsList.length}
          required
          loading={loading}
        />
        <S.SubmitButton type='submit' variant='contained' disabled={!isValid || !isDirty}>
          Consultar preço
        </S.SubmitButton>
      </form>
    </S.Container>
  );
};
