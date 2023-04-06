import { api } from '@/services/api';
import { AxiosError } from 'axios';

type GetBrandingProps = {
  data?: FipeData[];
  status?: number;
  message?: string;
};

export const getBrandingList = async (): Promise<GetBrandingProps> => {
  try {
    const { data, status } = await api.get(`/carros/marcas`);

    return {
      data,
      status,
    };
  } catch (err) {
    const error = err as AxiosError;

    return {
      message: (error.response?.data as any).message,
      status: error.response?.status,
    };
  }
};
