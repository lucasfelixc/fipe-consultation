import { Controller, Control, RegisterOptions } from 'react-hook-form';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import * as S from './styles';

type Props = {
  control: Control<Inputs>;
  rules:
    | Omit<
        RegisterOptions<Inputs, keyof Inputs>,
        'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
      >
    | undefined;
  name: keyof Inputs;
  data: {
    codigo: string;
    nome: string;
  }[];
  label: string;
  disabled?: boolean;
  handleBlur?: () => void;
  required?: boolean;
  loading?: boolean;
};

export const TextFieldAutoComplete = ({
  control,
  rules,
  name,
  data,
  label,
  disabled,
  handleBlur,
  required,
  loading,
}: Props) => {
  return (
    <S.Container>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Autocomplete
            {...field}
            value={field.value || null}
            onChange={(e, value) => field.onChange(value)}
            id='text-field-auto-complete'
            sx={{ width: '100%' }}
            options={data}
            autoHighlight
            getOptionLabel={(option) => option.nome}
            isOptionEqualToValue={(option, value) => option.codigo === value.codigo}
            disabled={disabled}
            onBlur={handleBlur}
            loading={loading}
            renderOption={(props, option) => (
              <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                {option.nome}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                required={required}
                label={label}
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
          />
        )}
      />
    </S.Container>
  );
};
