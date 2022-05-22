import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Shefl from '../components/Shefl';
import { useNavigate } from 'react-router-dom';

const Home = ({ data, updatehandler }) => {
  const [books, setBooks] = useState([]);
  const navgate = useNavigate();

  return (
    <div>
      <div>
        <Shefl
          title={'Currently Reading'}
          data={books && data}
          updatehandler={updatehandler}
          shelf={'currentlyReading'}
        />
        <Shefl
          shelf={'wantToRead'}
          data={books && data}
          updatehandler={updatehandler}
          title={'want To Read'}
        />
        <Shefl
          shelf={'read'}
          data={books && data}
          updatehandler={updatehandler}
          title={'Read'}
        />
        <div className='open-search'>
          <a
            onClick={() => {
              navgate('/search');
            }}
          >
            Add a book
          </a>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
  updatehandler: PropTypes.func.isRequired,
};

export default Home;
