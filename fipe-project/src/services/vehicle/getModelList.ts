import { api } from '@/services/api';
import { AxiosError } from 'axios';

type ModelParams = {
  brandingId: string;
};

type GetModelProps = {
  data?: { anos: VehicleData[]; modelos: VehicleData[] };
  status?: number;
  message?: string;
};

export const getModelList = async (params?: ModelParams): Promise<GetModelProps> => {
  try {
    const { data, status } = await api.get(`/carros/marcas/${params?.brandingId}/modelos`);

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
