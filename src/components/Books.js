import React from 'react';
import PropTypes from 'prop-types';

const books = ({ book, updatehandler }) => {
  
  return (
    <div>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
            }}
            
          >
            <img src={book.imageLinks ?.thumbnail} width={128} height={193}  />
          </div>
          <div className='book-shelf-changer'>
            <select
              defaultValue={book.shelf ? book.shelf :'none'}
              onChange={e => updatehandler(book, e.target.value)}
            >
              <option value='none' disabled>
                Move to...
              </option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title} </div>
        <div className='book-authors'>{book.authors} </div>
      </div>
    </div>
  );
};

books.propTypes = {
  book: PropTypes.object.isRequired,
  updatehandler: PropTypes.func.isRequired,
};

export default books;
