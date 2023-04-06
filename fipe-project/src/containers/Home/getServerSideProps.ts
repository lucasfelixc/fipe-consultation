import { GetServerSideProps } from 'next';
import { getBrandingList } from '@/services/vehicle';

export const getServerSideProps: GetServerSideProps<{ [key: string]: unknown }> = async () => {
  const brandingData = await getBrandingList();

  if (brandingData.status === 200 && brandingData?.data?.length) {
    return { props: { brandingList: brandingData.data } };
  }

  return { props: { brandingList: [], error: true } };
};
