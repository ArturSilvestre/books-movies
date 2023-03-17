import { Link } from 'react-router-dom';
import bgImage from '../../assets/Check.svg';
import { Header } from "../../components/Header/header";
import { HomeContainer, HomeContent, HomeMain, PagesButton } from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeContent>
          <HomeMain>
            <h1>Leituras e Telas:</h1>
            <p>
              Descubra um universo de histórias em nosso site!<br /> 
              Aqui, você encontrará uma lista selecionada de livros emocionantes e 
              filmes envolventes, com resumos detalhados que vão te fazer mergulhar 
              de cabeça nas narrativas mais incríveis.
            </p>
            <Link to="/livros">
              <PagesButton>
                Livros
              </PagesButton>
            </Link>
            <Link to="/filmes">
              <PagesButton>
                Filmes
              </PagesButton>
            </Link>
          </HomeMain>
        </HomeContent>
        <img src={bgImage} alt="Imagem de fundo de tela Check" />
      </HomeContainer>
    </>
  )
}