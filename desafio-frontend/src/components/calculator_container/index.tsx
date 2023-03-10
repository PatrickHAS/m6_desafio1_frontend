import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ISubmitInstallment,
  useIsntallmentContext,
} from "../../contexts/installment_calculator";
import {
  BackgroundLigthgray,
  BackgroundWhite,
  Buttom,
  ContainerCal,
  ContainerInstallments,
  Form,
  H1,
  LabelErrors,
} from "./style";
import { InstallmentSchema } from "../../validator/schema";

const CalculatorContainer = () => {
  const { submitInstallment, tomorrow, in15Days, in30Days, in90Days } =
    useIsntallmentContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISubmitInstallment>({
    resolver: yupResolver(InstallmentSchema),
  });

  return (
    <ContainerCal>
      <BackgroundWhite>
        <Form onSubmit={handleSubmit(submitInstallment)}>
          <H1>Simule sua Antecipação</H1>
          <LabelErrors>
            <label className="label--text" htmlFor="info_value">
              Informe o valor da venda*
            </label>
            <p>{errors.amount?.message}</p>
          </LabelErrors>
          <input
            className="input--value"
            id="info_value"
            type="text"
            {...register("amount")}
          />
          <LabelErrors>
            <label className="label--text" htmlFor="parcelas">
              Em quantas parcelas*
            </label>
            <p>{errors.installments?.message}</p>
          </LabelErrors>
          <input
            className="input--value"
            id="parcelas"
            type="text"
            {...register("installments")}
          />
          <p>Máximo de 12 parcelas</p>
          <LabelErrors>
            <label className="label--text" htmlFor="mdr">
              Informe o percentual de MDR*
            </label>
            <p>{errors.mdr?.message}</p>
          </LabelErrors>
          <input
            className="input--value"
            id="mdr"
            type="text"
            {...register("mdr")}
          />
          <Buttom type="submit">Enviar</Buttom>
        </Form>
      </BackgroundWhite>
      <BackgroundLigthgray>
        <ContainerInstallments>
          <h1>VOCÊ RECEBERÁ:</h1>
          <p className="sub">_____________________________</p>
          <p className="installment">
            Amanhã:{" "}
            <span>
              {tomorrow.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </p>
          <p className="installment">
            Em 15 dias:{" "}
            <span>
              {in15Days.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </p>
          <p className="installment">
            Em 30 dias:{" "}
            <span>
              {in30Days.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </p>
          <p className="installment">
            Em 90 dias:{" "}
            <span>
              {in90Days.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </p>
        </ContainerInstallments>
      </BackgroundLigthgray>
    </ContainerCal>
  );
};

export default CalculatorContainer;
