import { Header } from "../../components/Header/header";
import { MoviesContent } from "./styles";

export function Movies() {
  return (
    <>
      <Header />
      <MoviesContent>
        <h1>Pagina com listagens dos filmes</h1>
        <ul>
          <li>Filme 1: 1</li>
          <li>Filme 2: 2</li>
          <li>Filme 3: 3</li>
          <li>Filme 4: 4</li>
          <li>Filme 5: 5</li>
          <li>Filme 6: 6</li>
          <li>Filme 7: 7</li>
        </ul>
      </MoviesContent>
    </>
  )
} 