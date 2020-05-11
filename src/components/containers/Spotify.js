import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Spotify(props) {
  if (!props.songs) {
    return (
      <div className="song">
        Sorry, looks like spotify is not available in this country :(
      </div>
    );
  }
  const arrayOfSongs = [];
  for (let i = 0; i < 10; i += 1) {
    arrayOfSongs.push(
      <div className="song" key={'song' + i}>
        {props.songs[i].name} by {props.songs[i].by}
      </div>,
    );
  }

  return <div id="spotify">{arrayOfSongs}</div>;
}

export default Spotify;
