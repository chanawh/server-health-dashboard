// client/src/pages/Login.jsx
import { useState } from 'react';
import { login } from '../services/userService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    // Log submitted form data
    console.log('Submitted login form:', form);
  
    // Validate email format
    if (!validateEmail(form.email)) {
      setError('Please enter a valid email address');
      return;
    }
  
    try {
      const res = await login(form);
      const { token, user } = res.data;
      console.log('🟢 Login response:', res.data);
        
      // Login.jsx
      localStorage.setItem('authToken', token); // ✅ match what ProtectedRoute is looking for
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials or access denied');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
