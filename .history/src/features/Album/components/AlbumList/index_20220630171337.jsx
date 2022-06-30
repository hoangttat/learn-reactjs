import React from 'react';
import PropTypes from 'prop-types';

AlbumList.propTypes = {
  albumList: PropTypes.array.isRequired,
};

function AlbumList({albumList}) {
  return (
    <ul className='album-list'>
      
    </ul>
  );
}

export default AlbumList;