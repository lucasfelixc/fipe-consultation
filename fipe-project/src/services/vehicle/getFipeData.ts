import { api } from '@/services/api';
import { AxiosError } from 'axios';

type FipeParams = {
  brandingId: string;
  modelId: string;
  year: string;
};

type GetFipeProps = {
  data?: FipeData;
  status?: number;
  message?: string;
};

export const getFipeData = async (params?: FipeParams): Promise<GetFipeProps> => {
  try {
    const { data, status } = await api.get(
      `/carros/marcas/${params?.brandingId}/modelos/${params?.modelId}/anos/${params?.year}`,
    );

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
