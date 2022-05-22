import './App.css';
import { useEffect, useState } from 'react';
import Search from './pages/Search';
import Home from './pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { getAll, update } from './BooksAPI';

function App() {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    getAll().then(res => setBooks(res));
  }, []);
  const updatehandler = (book, move) => {
    const newShelf = books.map(b => {
      if (b.id === book.id) {
        book.shelf = move;
        return book;
      }
      return b;
    });
    setBooks(newShelf);
    update(book, move);
  };
  
  return (
    <div className='app'>
      <BrowserRouter> 
        <Routes>
          <Route
            path='/'
            element={<Home data={books} updatehandler={updatehandler} />}
          />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
