import { HeaderContainer, HeaderContent, HomePageButton } from "./styles";

import logoImg from '../../assets/Logo.svg';
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg}  alt="Logo Books e Movies"/>
        
        <Link to="/books-movies">
        <HomePageButton>
          Home
        </HomePageButton>
        </Link>
      </HeaderContent>
    </HeaderContainer>
  )
}