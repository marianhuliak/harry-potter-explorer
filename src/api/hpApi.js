const BASE_URL = 'https://hp-api.onrender.com/api';

export const getCharacters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/characters`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};

export const getSpells = async () => {
  try {
    const response = await fetch(`${BASE_URL}/spells`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching spells:', error);
    return [];
  }
};