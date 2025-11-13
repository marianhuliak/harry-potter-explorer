import './CharacterCard.css';

const CharacterCard = ({ character }) => {
  const defaultImage = 'https://i.imgur.com/hepj9ZS.png'; 
  
  return (
    <div className="character-card">
      <img 
        src={character.image || defaultImage} 
        alt={character.name}
        className="character-image"
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />
      <div className="character-info">
        <h3>{character.name}</h3>
        <p className="house">{character.house || 'Unknown House'}</p>
      </div>
    </div>
  );
};

export default CharacterCard;