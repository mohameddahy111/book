import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Shefl from '../components/Shefl';
import Search from './Search';

const Home = ({ data, updatehandler }) => {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div>
      {showSearchPage ? (
        <Search />
      ) : (
        <div>
          <Shefl
            title={'Currently Reading'}
            data={data}
            updatehandler={updatehandler}
            shelf={'currentlyReading'}
          />
          <Shefl
            shelf={'wantToRead'}
            data={data}
            updatehandler={updatehandler}
            title={'want To Read'}
          />
          <Shefl
            shelf={'read'}
            data={data}
            updatehandler={updatehandler}
            title={'Read'}
          />
          <div className='open-search'>
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  data : PropTypes.array.isRequired,
  updatehandler : PropTypes.func.isRequired
};

export default Home;
