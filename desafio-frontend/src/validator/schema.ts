import * as yup from "yup";

export const InstallmentSchema = yup.object().shape({
  amount: yup
    .number()
    .typeError("Este campo deve conter numeros")
    .integer()
    .min(1000, "Deve conter um valor maior que 999"),
  installments: yup
    .number()
    .typeError("Este campo deve conter numeros")
    .integer()
    .min(1, "Deve conter numeros maior que zero")
    .max(12, "Deve conter numeros de 1 a 12"),
  mdr: yup
    .number()
    .typeError("Este campo deve conter numeros")
    .integer()
    .max(100, "Deve conter numeros menores que 101"),
});
