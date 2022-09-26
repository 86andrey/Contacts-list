import styled from 'styled-components';

export const FilterWrapper = styled.div`
  padding: 20px 40px;
  background-color: #e6f3fa;
  border-bottom: 2px solid #4287f5;
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
  border: 2px solid #4287f5;
  border-radius: 5px;
  outline: none;
width: 200px;
  :focus {
    border-color: #4287f5;
  }
`;
