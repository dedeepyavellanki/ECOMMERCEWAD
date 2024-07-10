import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      navigate('/Cart')
      const payload = isLogin ? { email, password } : { name, email, password };
      const res = await axios.post(endpoint, payload);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data.msg);
    }
  };

 
  const navigateToRegister = () => {
    navigate('/register'); // Navigate to the registration page
  };

  return (
    <main className="container-fluid mt-5">
      <form className="mx-auto bg-purple-100 p-4 rounded shadow w-50" style={{ backgroundColor: '#F3E5F5' }} onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">{isLogin ? 'Login' : 'Register'}</h2>
        {!isLogin && (
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
        )}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
       
        <button type="submit" className="btn btn-purple w-100" style={{ backgroundColor: '#7E57C2' }}>{isLogin ? 'Login' : 'Register'}</button>
        <div className="text-center mt-3">
          <button type="button" className="btn btn-link btn-purple w-100" style={{ backgroundColor: '#7E57C2' }} onClick={navigateToRegister}>
            {isLogin ? 'New user? Register here' : 'Already have an account? Login here'}
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
