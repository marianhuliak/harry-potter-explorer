import './SpellCard.css';

const SpellCard = ({ spell }) => {
  return (
    <div className="spell-card">
      <h3>{spell.name}</h3>
      <p className="spell-description">{spell.description}</p>
    </div>
  );
};

export default SpellCard;