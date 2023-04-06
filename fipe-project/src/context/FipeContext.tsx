import React, { createContext, useState } from 'react';
import { getModelList } from '@/services/vehicle';

interface FipeContextData {
  brandingList: FipeData[];
  setBrandingList: React.Dispatch<React.SetStateAction<FipeData[]>>;
  modelList: FipeData[];
  yearsList: FipeData[];
  handleGetFipeData: (brandingId: string) => void;
  loading: boolean;
}

type FipeProviderProps = {
  children: React.ReactNode;
};

export const FipeContext = createContext({} as FipeContextData);

export function FipeProvider({ children }: FipeProviderProps) {
  const [brandingList, setBrandingList] = useState<FipeData[]>([]);
  const [modelList, setModelList] = useState<FipeData[]>([]);
  const [yearsList, setYearsList] = useState<FipeData[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGetFipeData = async (brandingId: string) => {
    setLoading(true);
    const modelData = await getModelList({ brandingId: brandingId });

    if (modelData.status === 200 && modelData.data) {
      !!modelData.data.modelos.length && setModelList(modelData.data.modelos);
      !!modelData.data.anos.length && setYearsList(modelData.data.anos);
    }

    setLoading(false);
  };

  return (
    <FipeContext.Provider
      value={{
        brandingList,
        setBrandingList,
        modelList,
        yearsList,
        handleGetFipeData,
        loading,
      }}
    >
      {children}
    </FipeContext.Provider>
  );
}
