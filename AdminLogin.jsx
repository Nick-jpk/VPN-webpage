import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin/dashboard');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-gray-700 p-6 rounded-lg text-white w-96">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input type="email" placeholder="Email" className="w-full mb-2 p-2 rounded" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full mb-4 p-2 rounded" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-500 p-2 w-full rounded" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default AdminLogin;
