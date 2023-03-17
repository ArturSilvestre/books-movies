import styled from "styled-components";

export const HeaderHomeContainer = styled.div`
  background-color: ${props => props.theme['gray-900']};
`;

export const HomeContainer = styled.div`
  height: 89.1vh;
  display: flex;
  flex-direction: row;  
`;

export const HomeContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 80px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HomeMain = styled.main`
  flex: 1;
  max-width: 560px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.white};
  }

  p {
    font-size: 24px;
    margin-top: 24px;
    margin-bottom: 25px;
    line-height: 38px;
  }

  img {
    z-index: -1;
  }
`;

export const PagesButton = styled.button`
  width: 65%;
  height: 50px;
  margin: 0 0 20px 0;
  border: 0;
  background: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
 
  &:hover {
    background-color: ${props => props.theme['green-700']};
    transition: background-color 0.5s;
  }
`;
