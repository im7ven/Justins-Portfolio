import styled from "styled-components";
import { highlightText } from "../styles.typography";
import { css } from "styled-components";

export const Form = styled.form`
  background: #232323;
  padding: 5rem 4rem;
  border-radius: 20px;
  width: 80%;
  position: relative;
  border-left: 3px solid #e4ba00;
`;

export const FormLabel = styled.label`
  display: block;
  ${highlightText}
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.3rem;

  @media screen and (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const FormTextarea = styled.textarea`
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  font-size: 1.6rem;

  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const ContactBtn = css`
  padding: 1.5rem 5rem;
  outline: 0;
  border: 0;
  display: block;
  color: #fff;
  font-size: 1.7rem;
  border-radius: 5px;
  font-weight: 700;
  background: #6200f5;
  cursor: pointer;
`;
export const FormBtn = styled.button`
  ${ContactBtn}
  width:100%;
`;

export const SubmittedMsg = styled.p`
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;
  color: #fff;
  font-style: italic;
`;

export const FormErrors = styled.p`
  color: red;
  font-size: 1.6rem;

  @media screen and (min-width: 768px) {
    font-size: 1.9rem;
  }
`;

export const LabelInputGroup = styled.div`
  margin-bottom: 2.5rem;
`;
