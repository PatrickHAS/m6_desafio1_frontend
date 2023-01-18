import * as yup from "yup";

export const InstallmentSchema = yup.object().shape({
  amount: yup.number().required("Deve conter apenas numeros"),
  installments: yup
    .number()
    .integer()
    .min(1)
    .max(12)
    .required("Informe o numero de parcelas de 1 a 12"),
  mdr: yup.number().required("Infome o numero do MDR"),
  days: yup.array(),
});
