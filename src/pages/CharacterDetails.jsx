import { useLocation, useNavigate } from 'react-router-dom';
import './CharacterDetails.css';

const CharacterDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { character } = location.state || {};

  if (!character) {
    return (
      <div className="character-details">
        <h2>Персонаж не знайдено</h2>
        <button onClick={() => navigate('/characters')} className="back-button">
          Повернутися до списку
        </button>
      </div>
    );
  }

  return (
    <div className="character-details">
      <button onClick={() => navigate('/characters')} className="back-button">
        ← Назад
      </button>
      
      <div className="details-content">
        <img 
          src={character.image || 'https://via.placeholder.com/400x600?text=No+Image'} 
          alt={character.name}
          className="details-image"
        />
        
        <div className="details-info">
          <h1>{character.name}</h1>
          
          <div className="info-item">
            <strong>Будинок:</strong> {character.house || 'Невідомо'}
          </div>
          
          <div className="info-item">
            <strong>Дата народження:</strong> {character.dateOfBirth || 'Невідомо'}
          </div>
          
          <div className="info-item">
            <strong>Актор:</strong> {character.actor || 'Невідомо'}
          </div>
          
          {character.patronus && (
            <div className="info-item">
              <strong>Патронус:</strong> {character.patronus}
            </div>
          )}
          
          {character.species && (
            <div className="info-item">
              <strong>Вид:</strong> {character.species}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;