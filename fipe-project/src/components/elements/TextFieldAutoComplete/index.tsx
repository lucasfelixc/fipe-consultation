import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import * as S from './styles';

type Props = {
  data: {
    codigo: string;
    nome: string;
  }[];
  label: string;
};

export const TextFieldAutoComplete = ({ data, label }: Props) => {
  return (
    <S.Container>
      <Autocomplete
        id='text-field-auto-complete'
        sx={{ width: '100%' }}
        options={data}
        autoHighlight
        getOptionLabel={(option) => option.nome}
        renderOption={(props, option) => (
          <Box component='li' sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            {option.nome}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            inputProps={{
              ...params.inputProps,
            }}
          />
        )}
      />
    </S.Container>
  );
};
