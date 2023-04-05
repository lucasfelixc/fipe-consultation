import { TextFieldAutoComplete } from '@/components';

const countries = [
  { codigo: 'AD', nome: 'Andorra' },
  {
    codigo: 'AE',
    nome: 'United Arab Emirates',
  },
];

const Home = () => {
  return <TextFieldAutoComplete data={countries} label='Marca' />;
};

export default Home;
