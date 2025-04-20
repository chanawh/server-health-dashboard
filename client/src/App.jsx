// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Servers from './pages/Servers';
import Users from './pages/Users'; // 👈 Import Users page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/servers" element={<Servers />} />
        <Route path="/users" element={<Users />} /> {/* 👈 Add this */}
      </Routes>
    </Router>
  );
}

export default App;
