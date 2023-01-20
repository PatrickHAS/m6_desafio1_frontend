import { createContext, useContext, useState, ReactNode } from "react";
import api from "../services/Api/api";

export interface IInstallmentCalculator {
  children: ReactNode;
}

export interface ISubmitInstallment {
  amount: number;
  installments: number;
  mdr: number;
  days?: [];
}

interface IInstallmentData {
  tomorrow: number;
  in15Days: number;
  in30Days: number;
  in90Days: number;
  submitInstallment: (data: ISubmitInstallment) => void;
}

const InstallmentContext = createContext<IInstallmentData>(
  {} as IInstallmentData
);

const InstallmentProvider = ({ children }: IInstallmentCalculator) => {
  const [tomorrow, setTomorrow] = useState(0);
  const [in15Days, setIn15Days] = useState(0);
  const [in30Days, setIn30Days] = useState(0);
  const [in90Days, setIn90Days] = useState(0);

  const submitInstallment = async (data: ISubmitInstallment) => {
    try {
      await api.post("/", data).then((response) => {
        setTomorrow(response.data[1]);
        setIn15Days(response.data[15]);
        setIn30Days(response.data[30]);
        setIn90Days(response.data[90]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <InstallmentContext.Provider
      value={{
        tomorrow,
        in15Days,
        in30Days,
        in90Days,
        submitInstallment,
      }}
    >
      {children}
    </InstallmentContext.Provider>
  );
};
const useIsntallmentContext = () => useContext(InstallmentContext);

export { useIsntallmentContext, InstallmentProvider };
