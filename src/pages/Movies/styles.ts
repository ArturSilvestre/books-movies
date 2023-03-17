import styled from "styled-components";

export const HeaderHomeContainer = styled.div`
  background-color: ${props => props.theme['gray-900']};
  padding: 1.5rem 0 1.5rem;
`;

export const MoviesContent = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  h1 {
    margin: 10px 0;
  }
  
  ul li {
    text-decoration: none;
    list-style: none;
    margin: 15px 0;
  }
`; 