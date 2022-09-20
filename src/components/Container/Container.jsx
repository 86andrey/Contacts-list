import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  position: relative;
`;

const Container = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Container;
