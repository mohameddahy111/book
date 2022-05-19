import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Books from '../components/Books';
import BooksAPI from '../BooksAPI';

const Search = ({}) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');

  const data = () => {
    BooksAPI.getAll().then(res => {
      setBooks(res);
    });
  };
  useEffect(() => {
    data();
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
    BooksAPI.update(book, move)
  };
  useEffect(() => {
    let isActive = true;
    if (query) {
      BooksAPI.search(query).then(data => {
        if (data.err) {
          setSearch([]);
        } else {
          if (isActive) {
            setSearch(data);
          }
        }
      });
    }
    return () => {
      isActive = false;
      setSearch([]);
    };
  }, [query]);
  return (
    <div>
      <div className='search-books'>
        <div className='search-books-bar'>
          <a href='/'>back </a>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              value={query}
              onChange={e => {
                setQuery(e.target.value);
              }}
              placeholder='Search by title, author, or ISBN'
            />
          </div>
        </div>
        {search.length >0 ?(
        <div className='search-books-results'>
          <ol className='books-grid'>
            {search.map(x => (
              <li key={x.id}>
                <Books book={x} updatehandler={update} />
              </li>
            ))}
          </ol>
        </div>):(null)}
      </div>
    </div>
  );
};

Search.propTypes = {};

export default Search;
