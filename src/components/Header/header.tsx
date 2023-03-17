import { HeaderContainer, HeaderContent, HomePageButton } from "./styles";

import logoImg from '../../assets/Logo.svg';
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg}  alt="Logo Books e Movies"/>
        
        <HomePageButton>
          <Link to="/books-movies">
            Home
          </Link>
        </HomePageButton>
      </HeaderContent>
    </HeaderContainer>
  )
}