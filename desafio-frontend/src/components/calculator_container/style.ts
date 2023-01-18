import styled from "styled-components";
import { FormHTMLAttributes, ReactNode } from "react";

interface ICalculatorProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const ContainerCal = styled.div<ICalculatorProps>`
  width: 1200px;
  height: 700px;
  display: flex;
  justify-content: space-between;
  border-radius: 2px;
  border: 3px solid #ced4da;
`;

export const BackgroundWhite = styled.div<ICalculatorProps>`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const BackgroundLigthgray = styled.div<ICalculatorProps>`
  width: 60%;
  height: 100%;
  background-color: #d1dce3 18%;
`;

export const H1 = styled.h1<ICalculatorProps>`
  width: 100%;
  font-size: 50px;
  color: #656565;
  display: flex;
  margin-top: 50px;
  align-items: flex-start;
  line-height: 28px;
`;

export const Form = styled.form<ICalculatorProps>`
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .label--text {
    font-size: 17px;
    color: #868e96;
  }

  .input--value {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    border: 2px solid #ced4da;
    outline: none;
  }

  .input--value:focus {
    border: 2px solid #4dabf7;
  }

  p {
    font-size: 14px;
    color: #cecece;
    margin-top: 0;
  }
`;

export const Buttom = styled.button<ICalculatorProps>`
  width: 150px;
  height: 50px;
  font-size: 18px;
  color: white;
  background-color: #656565;
  border-radius: 4px;
  margin-top: 50px;
  border: none;

  :hover {
    background-color: #868e96;
  }
`;

export const ContainerInstallments = styled.div<ICalculatorProps>`
  width: 80%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    margin-top: 170px;
    font-size: 30px;
    color: #1c7ed6;
    margin-bottom: 0;
    font-style: italic;
  }
  .sub {
    color: #dee2e6;
    margin-top: -15px;
  }

  .installment {
    font-size: 22px;
    color: #4dabf7;
    font-style: italic;

    span {
      color: #1c7ed6;
      font-weight: 600;
    }
  }
`;

export const LabelErrors = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
  margin-top: 50px;

  p {
    color: #9b2226;
  }
`;
