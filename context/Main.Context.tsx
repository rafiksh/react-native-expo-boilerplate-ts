import React, { createContext, ReactNode, useState } from "react";

interface MainContextProps {
  exchangeRate: number;
  setExchangeRate: React.Dispatch<React.SetStateAction<number>>;
}

const MainContext = createContext<MainContextProps>({
  exchangeRate: 50000,
  setExchangeRate: () => {},
});

const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [exchangeRate, setExchangeRate] = useState<number>(50000);

  return (
    <MainContext.Provider
      value={{
        exchangeRate,
        setExchangeRate,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainContext, MainContextProvider };
