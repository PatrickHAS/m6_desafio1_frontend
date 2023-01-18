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
  amount: number;
  installments: number;
  mdr: number;
  days?: [];
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  setInstallment: React.Dispatch<React.SetStateAction<number>>;
  setMdr: React.Dispatch<React.SetStateAction<number>>;
  setDays: React.Dispatch<React.SetStateAction<[]>>;
  submitInstallment: (data: ISubmitInstallment) => void;
}

const InstallmentContext = createContext<IInstallmentData>(
  {} as IInstallmentData
);

const InstallmentProvider = ({ children }: IInstallmentCalculator) => {
  const [amount, setAmount] = useState(0);
  const [installments, setInstallment] = useState(0);
  const [mdr, setMdr] = useState(0);
  const [days, setDays] = useState<[]>([]);

  const submitInstallment = async (data: ISubmitInstallment) => {
    console.log(data);
    try {
      await api.post("/", data).then((response) => console.log(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <InstallmentContext.Provider
      value={{
        amount,
        installments,
        mdr,
        days,
        setAmount,
        setInstallment,
        setMdr,
        setDays,
        submitInstallment,
      }}
    >
      {children}
    </InstallmentContext.Provider>
  );
};
const useIsntallmentContext = () => useContext(InstallmentContext);

export { useIsntallmentContext, InstallmentProvider };
