import React, { createContext, useState } from 'react';

interface FipeContextData {
  brandingList: FipeData[];
  setBrandingList: (data: FipeData[]) => void;
}

type FipeProviderProps = {
  children: React.ReactNode;
};

export const FipeContext = createContext({} as FipeContextData);

export function FipeProvider({ children }: FipeProviderProps) {
  const [brandingList, setBrandingList] = useState<FipeData[]>([]);

  return (
    <FipeContext.Provider
      value={{
        brandingList,
        setBrandingList,
      }}
    >
      {children}
    </FipeContext.Provider>
  );
}
