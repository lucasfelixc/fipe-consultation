import { FipeProvider } from '@/context/FipeContext';
import { HomeTemplate } from '@/components';
import * as S from './styles';

type HomeProps = {
  brandingList: FipeData[];
  error?: boolean;
};

const Home = ({ brandingList }: HomeProps) => {
  return (
    <FipeProvider>
      <S.Container>
        <HomeTemplate brandingList={brandingList} />
      </S.Container>
    </FipeProvider>
  );
};

export default Home;
