import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Characters from './pages/Characters';
import CharacterDetails from './pages/CharacterDetails';
import Spells from './pages/Spells';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/characters" />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:id" element={<CharacterDetails />} />
            <Route path="/spells" element={<Spells />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;