import { useState, useEffect } from 'react';
import { getSpells } from '../api/hpApi';
import SpellCard from '../components/SpellCard';
import './Spells.css';

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpells = async () => {
      const data = await getSpells();
      setSpells(data);
      setLoading(false);
    };
    fetchSpells();
  }, []);

  if (loading) return <div className="loading">Завантаження...</div>;

  return (
    <div className="spells-page">
      <h1>Закляття Harry Potter</h1>
      <div className="spells-grid">
        {spells.map((spell, index) => (
          <SpellCard key={index} spell={spell} />
        ))}
      </div>
    </div>
  );
};

export default Spells;