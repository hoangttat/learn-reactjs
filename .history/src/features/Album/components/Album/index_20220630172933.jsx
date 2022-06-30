import React from 'react';
import PropTypes from 'prop-types';

Album.propTypes = {
  album: PropTypes.object.isRequired,
  
};

function Album({album}) {
  return (
    <div className="album">
      <div className=''>
        <img src="{album.thumbnailUrl}" alt="{album.name}"/>
      </div>

      <p className="album__name">{album.name}</p>
      
    </div>
  );
}

export default Album;