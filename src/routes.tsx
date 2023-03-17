import { Routes, BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Books } from './pages/Books';
import { Movies } from './pages/Movies';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/books-movies' element={<Home />} />
        <Route path='/livros' element={<Books />} />
        <Route path='/filmes' element={<Movies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;