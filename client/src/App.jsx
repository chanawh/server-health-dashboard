// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Servers from './pages/Servers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/servers" element={<Servers />} />
        {/* other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
