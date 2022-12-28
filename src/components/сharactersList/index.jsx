import React, { useEffect, useState } from 'react';
import Card from '../card';
import MoreButton from '../moreButton';
import './index.css';

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(4);

  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = () => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then((res) => res.json())
      .then((data) => {
        setCharacters(() => data);
      })
      .catch((e) => {
        setCharacters([]);
        throw new Error(e);
      });
  };

  const handleClickMore = () => {
    setCount((count) => count + 4);
  };

  return (
    <div className='characters-list'>
      {characters.slice(0, count)?.map((character) => (
        <Card
          key={character.id}
          title={character.fullName}
          moreInfo={character.title}
          image={character.imageUrl}
        />
      ))}
      <MoreButton
        disabled={count >= characters?.length}
        onClick={handleClickMore}
      />
    </div>
  );
}

export default CharactersList;
