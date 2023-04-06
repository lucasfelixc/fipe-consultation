import React, { createContext, useState } from 'react';
import { getModelList, getFipeData } from '@/services/vehicle';
import { Toast } from '@/utils/toasts';

interface FipeContextData {
  brandingList: VehicleData[];
  setBrandingList: React.Dispatch<React.SetStateAction<VehicleData[]>>;
  modelList: VehicleData[];
  yearsList: VehicleData[];
  handleGetVehicleData: (brandingId: string) => void;
  handleGetFipeData: (brandingId: string, modelId: string, year: string) => void;
  loading: boolean;
  fipeData: FipeData | null;
  handleClearFipeData: () => void;
  handleClearVehicleData: () => void;
}

type FipeProviderProps = {
  children: React.ReactNode;
};

export const FipeContext = createContext({} as FipeContextData);

export function FipeProvider({ children }: FipeProviderProps) {
  const [brandingList, setBrandingList] = useState<VehicleData[]>([]);
  const [modelList, setModelList] = useState<VehicleData[]>([]);
  const [yearsList, setYearsList] = useState<VehicleData[]>([]);
  const [loading, setLoading] = useState(false);
  const [fipeData, setFipeData] = useState<FipeData | null>(null);

  const handleGetVehicleData = async (brandingId: string) => {
    setLoading(true);
    const modelData = await getModelList({ brandingId: brandingId });

    if (modelData.status === 200 && modelData.data) {
      !!modelData.data.modelos.length && setModelList(modelData.data.modelos);
      !!modelData.data.anos.length && setYearsList(modelData.data.anos);
    }

    setLoading(false);
  };

  const handleGetFipeData = async (brandingId: string, modelId: string, year: string) => {
    const fipeData = await getFipeData({ brandingId, modelId, year });

    if (fipeData.status === 200 && fipeData.data) {
      setFipeData(fipeData.data);
    } else {
      Toast('Houve algum problema na busca dos dados, tente novamente.', 'error');
    }
  };

  const handleClearFipeData = () => setFipeData(null);

  const handleClearVehicleData = () => {
    setModelList([]);
    setYearsList([]);
  };

  return (
    <FipeContext.Provider
      value={{
        brandingList,
        setBrandingList,
        modelList,
        yearsList,
        handleGetVehicleData,
        handleGetFipeData,
        loading,
        fipeData,
        handleClearFipeData,
        handleClearVehicleData,
      }}
    >
      {children}
    </FipeContext.Provider>
  );
}
