import { api } from '@/services/api';
import { AxiosError } from 'axios';

type YearParams = {
  brandingId: string;
  modelId: string;
};

type GetYearProps = {
  data?: VehicleData[];
  status?: number;
  message?: string;
};

export const getYearList = async (params?: YearParams): Promise<GetYearProps> => {
  try {
    const { data, status } = await api.get(
      `/carros/marcas/${params?.brandingId}/modelos/${params?.modelId}/anos`,
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
