import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../api/hpApi';
import CharacterCard from '../components/CharacterCard';
import './Characters.css';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  if (loading) return <div className="loading">Завантаження...</div>;

  return (
    <div className="characters-page">
      <h1>Персонажі Harry Potter</h1>
      <div className="characters-grid">
        {characters.map((character, index) => (
          <Link 
            key={index} 
            to={`/characters/${index}`}
            state={{ character }}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <CharacterCard character={character} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Characters;