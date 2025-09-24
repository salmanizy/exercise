import React, { useState } from 'react';

// Main App component
const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Simulasi login. Cek konsol untuk data.');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Login Box */}
      <div className="bg-white border border-gray-300 rounded-lg p-10 max-w-sm w-full mb-4">
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold">Welcome to Jayjay Login</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-2">
          <label className="block text-sm font-medium text-blue-700">Username</label>
          <input
            type="text"
            className="w-full text-sm p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
            placeholder="Insert Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label className="block text-sm font-medium text-blue-700 mt-2">Password</label>
          <input
            type="password"
            className="w-full text-sm p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-400"
            placeholder="Insert Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-2 mt-2 rounded-md text-sm font-semibold text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-800 transition-colors"
          >
            Masuk
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-sm font-semibold">ATAU</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="text-center text-sm max-w-sm w-full">
          Belum punya akun?{' '}
          <a href="#" className="text-blue-500 font-semibold hover:underline">
            Daftar
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default App;
