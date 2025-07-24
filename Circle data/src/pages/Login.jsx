import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      //to be changed with the companies domain
      const response = await fetch('https://your-odk-central-domain.com/v1/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      const data = await response.json();

      if (data.token) {
        localStorage.setItem('odkToken', data.token);
      }

      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-[#203e7c] text-center">
          Sign In to Circle Research Company
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-[#203e7c]">
              Username or Email
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email or username"
              autoFocus
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203e7c]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#203e7c]">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#203e7c]"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#203e7c] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#1a3261] transition"
            >
              Sign In
            </button>
          </div>
          <div className="text-sm text-center text-[#203e7c] space-x-2">
            <Link to="/signup" className="text-blue-600 hover:underline">
              Need an account?
            </Link>
            <span>·</span>
            <Link to="/request-password-reset" className="text-blue-600 hover:underline">
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
