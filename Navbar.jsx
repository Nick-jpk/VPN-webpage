import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4 text-white flex justify-between">
    <Link to="/" className="font-bold text-xl">Victonnel VPN</Link>
    <div>
      <Link to="/vpn" className="mr-4">VPN Files</Link>
      <Link to="/admin">Admin</Link>
    </div>
  </nav>
);

export default Navbar;
