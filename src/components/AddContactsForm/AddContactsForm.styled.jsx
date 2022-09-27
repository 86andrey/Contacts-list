import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormWrapper = styled.div`
  padding: 10px;
  background-color: #fff;
  // border-bottom: 2px solid #4287f5;
  text-align: center;
  border-radius: 5px;
`;

export const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto 20px;
  text-align: start;
  min-width: 100px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: 500;

  :not(:last-child) {
    margin-bottom: 20px;
  }
  /* align-items: flex-start;
  margin: 0 auto;
  min-width: 100px; */
`;

export const Input = styled(Field)`
  font-size: 20px;
  padding: 5px 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  :focus {
    border-color: #4287f5;
  }
`;

export const Button = styled.button`
  align-items: center;
  background-color: initial;
  background-image: linear-gradient(rgba(179, 132, 201, .84), rgba(57, 31, 91, .84) 50%);
  border-radius: 42px;
  border-width: 0;
  box-shadow: rgba(57, 31, 91, 0.24) 0 2px 2px,rgba(179, 132, 201, 0.4) 0 8px 12px;
  color: #FFFFFF;
  cursor: pointer;
  display: inline;
  font-family: Quicksand,sans-serif;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  letter-spacing: .04em;
  line-height: 16px;
  margin-right: 20px;
  padding: 14px 14px;
  text-align: center;
  text-decoration: none;
  text-shadow: rgba(255, 255, 255, 0.4) 0 0 4px,rgba(255, 255, 255, 0.2) 0 0 12px,rgba(57, 31, 91, 0.6) 1px 1px 4px,rgba(57, 31, 91, 0.32) 4px 4px 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
}

:hover {
  background-image: linear-gradient(#B384C9, #391F5B 50%);
}

@media (min-width: 768px) {
    font-size: 18px;
    padding: 18px 34px;
}
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;
