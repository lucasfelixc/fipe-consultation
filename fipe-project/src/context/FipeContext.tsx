import React, { createContext, useState } from 'react';
import { getModelList, getFipeData, getYearList } from '@/services/vehicle';
import { Toast } from '@/utils/toasts';

interface FipeContextData {
  brandingList: VehicleData[];
  setBrandingList: React.Dispatch<React.SetStateAction<VehicleData[]>>;
  modelList: VehicleData[];
  yearsList: VehicleData[];
  handleGetModelData: (brandingId: string) => void;
  handleGetYearData: (brandingId: string, modelId: string) => void;
  handleGetFipeData: (brandingId: string, modelId: string, year: string) => void;
  loading: boolean;
  loadingFipeData: boolean;
  fipeData: FipeData | null;
  handleClearFipeData: () => void;
  handleClearVehicleData: () => void;
  handleClearYearData: () => void;
}

type FipeProviderProps = {
  children: React.ReactNode;
};

export const FipeContext = createContext({} as FipeContextData);

export function FipeProvider({ children }: FipeProviderProps) {
  const [brandingList, setBrandingList] = useState<VehicleData[]>([]);
  const [modelList, setModelList] = useState<VehicleData[]>([]);
  const [yearsList, setYearsList] = useState<VehicleData[]>([]);
  const [fipeData, setFipeData] = useState<FipeData | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingFipeData, setLoadingFipeData] = useState(false);

  const handleGetModelData = async (brandingId: string) => {
    setLoading(true);
    const modelData = await getModelList({ brandingId: brandingId });

    if (modelData.status === 200 && modelData.data) {
      !!modelData.data.modelos.length && setModelList(modelData.data.modelos);
    }

    setLoading(false);
  };

  const handleGetYearData = async (brandingId: string, modelId: string) => {
    setLoading(true);
    const yearData = await getYearList({ brandingId, modelId });

    if (yearData.status === 200 && yearData.data) {
      setYearsList(yearData.data);
    }

    setLoading(false);
  };

  const handleGetFipeData = async (brandingId: string, modelId: string, year: string) => {
    setLoadingFipeData(true);
    const fipeData = await getFipeData({ brandingId, modelId, year });

    if (fipeData.status === 200 && fipeData.data) {
      setFipeData(fipeData.data);
    } else {
      Toast('Houve algum problema na busca dos dados, tente novamente.', 'error');
    }
    setLoadingFipeData(false);
  };

  const handleClearFipeData = () => setFipeData(null);

  const handleClearVehicleData = () => {
    setModelList([]);
    setYearsList([]);
  };

  const handleClearYearData = () => setYearsList([]);

  return (
    <FipeContext.Provider
      value={{
        brandingList,
        setBrandingList,
        modelList,
        yearsList,
        handleGetModelData,
        handleGetFipeData,
        handleGetYearData,
        loading,
        loadingFipeData,
        fipeData,
        handleClearFipeData,
        handleClearVehicleData,
        handleClearYearData,
      }}
    >
      {children}
    </FipeContext.Provider>
  );
}
