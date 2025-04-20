import { useState } from 'react';
import { register } from '../services/userService'; // Import the register function from userService

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the register service to send data to the backend
      const res = await register(formData);  
      
      // Set a success message if registration is successful
      setMessage(`✅ ${res.data.message}`);
      
      // Optionally, clear form fields after successful registration
      setFormData({
        username: '',
        email: '',
        password: '',
      });
    } catch (err) {
      // Display an error message if registration fails
      const errorMsg = err.response?.data?.message || 'Registration failed';
      setMessage(`❌ ${errorMsg}`);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br /><br />

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegisterForm;
