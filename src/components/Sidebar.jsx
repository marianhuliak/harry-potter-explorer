import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Harry Potter Explorer</h2>
      <nav>
        <Link to="/characters" className="nav-link">
          🧍‍♂️ Characters
        </Link>
        <Link to="/spells" className="nav-link">
          🪄 Spells
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;