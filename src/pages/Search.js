import React, { useEffect, useState } from 'react';
import Books from '../components/Books';
import BooksAPI from '../BooksAPI';

const Search = ({updatehandler , data}) => {
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');

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
        {search.length > 0 ? (
          <div className='search-books-results'>
            <ol className='books-grid'>
              {search.map(x => (
                <li key={x.id}>
                  <Books book={x} updatehandler={updatehandler} search={data} />
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div>
            {query ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                }}
              >
                <span style={{ color: 'red', fontSize: '30px' }}>
                  "{`${query}`}"{' '}
                </span>
                <h1>No result of your search</h1>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
