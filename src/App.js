import './App.css';
import { useEffect, useState } from 'react';
import Search from './pages/Search';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksAPI from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    BooksAPI.getAll().then(res => {
      setBooks(res);
    });
  }, []);
  const update = (book, move) => {
    const newShelf = books.map(b => {
      if (b.id === book.id) {
        book.shelf = move;
        return book;
      }
      return b;
    });
    setBooks(newShelf);
    BooksAPI.update(book, move);
  };

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home data={books} updatehandler={update} />}
          />
          <Route
            path='/search'
            element={<Search updatehandler={update} data={books} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
