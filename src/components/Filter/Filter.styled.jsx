import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 20px;
  // background-color: #e6f3fa;
  border-bottom: 2px solid #5b678a;
  text-align: center;
  margin-top: 70px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 20px;
  padding: 5px 10px;
  border: 2px solid #5b678a;
  border-radius: 5px;
  outline: none;
width: 150px;
  :focus {
    border-color: #4287f5;
  }
`;
