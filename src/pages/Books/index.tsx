import { Header } from "../../components/Header/header";
import { BooksContent } from "./styles";

export function Books() {
  return (
    <>
      <Header />
      <BooksContent>
        <h1>Pagina com listagens dos Livros</h1>
        <ul>
          <li>Livro 1: 1</li>
          <li>Livro 2: 2</li>
          <li>Livro 3: 3</li>
          <li>Livro 4: 4</li>
          <li>Livro 5: 5</li>
          <li>Livro 6: 6</li>
          <li>Livro 7: 7</li>
        </ul>
      </BooksContent>
    </>
  )
}