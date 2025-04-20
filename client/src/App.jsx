  // src/App.jsx
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Servers from './pages/Servers';
  import Users from './pages/Users';
  import Login from './pages/Login';
  import Dashboard from './pages/Dashboard';
  import Unauthorized from './pages/Unauthorized'; // 👈 Optional: add this page
  import ProtectedRoute from './components/ProtectedRoute';
  import RegisterForm from './components/RegisterForm';

  function App() {
    return (
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />

          {/* Protected Routes */}
          <Route
            path="/servers"
            element={
              <ProtectedRoute>
                <Servers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Optional: Unauthorized page */}
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    );
  }

  export default App;
