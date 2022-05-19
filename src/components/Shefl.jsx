import React from 'react';
import PropTypes from 'prop-types';
import Books from '../components/Books';

const Shefl = ({ title, data, shelf, updatehandler }) => {
  const newbook = data.filter(data => data.shelf === shelf);
  return (
    <div>
      <div className='list-books'>
        <div className='list-books-content'>
          <div>
            <div className='bookshelf'>
              <h2 className='bookshelf-title'> {title}</h2>
              <div className='bookshelf-books'>
                <ol className='books-grid'>
                  {newbook.map(x => (
                    <li key={x.id}>
                      <Books book={x} updatehandler={updatehandler} />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Shefl.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  updatehandler: PropTypes.func.isRequired,
};

export default Shefl;
