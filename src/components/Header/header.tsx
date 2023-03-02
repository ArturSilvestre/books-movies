import { HeaderContainer, HeaderContent, HomePageButton } from "./styles";

import logoImg from '../../assets/Logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg}  alt="Logo Books e Movies"/>
        
        <HomePageButton>Home</HomePageButton>
      </HeaderContent>
    </HeaderContainer>
  )
}