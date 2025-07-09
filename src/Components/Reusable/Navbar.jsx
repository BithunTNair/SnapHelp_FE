import { Link } from 'react-router-dom';
import { FaHome, FaUserCircle, FaServicestack } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Navbar = ({ userName }) => {
  const [name, setName] = useState(userName || '');

  useEffect(() => {
    if (!userName) {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.fullName) setName(user.fullName);
    }
  }, [userName]);

  return (
    <nav
      className="flex items-center justify-between px-8 py-4 shadow-lg"
      style={{
        background: 'linear-gradient(90deg, var(--primary-dark), var(--primary))',
        color: 'var(--primary-light)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
    
      <div className="flex items-center gap-3">
        <FaServicestack size={32} color="var(--accent)" />
        <span className="text-2xl font-bold tracking-wide" style={{ color: 'var(--primary-light)' }}>
          SnapHelp
        </span>
      </div>

    
      <div className="flex gap-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-medium hover:text-[var(--accent)] transition-colors"
          style={{ color: 'var(--primary-light)' }}
        >
          <FaHome size={22} />
          Home
        </Link>
        <Link
          to="/services"
          className="flex items-center gap-2 text-lg font-medium hover:text-[var(--accent)] transition-colors"
          style={{ color: 'var(--primary-light)' }}
        >
          <FaServicestack size={22} />
          Services
        </Link>
        <Link
          to="/register_user"
          className="flex items-center gap-2 text-lg font-medium hover:text-[var(--accent)] transition-colors"
          style={{ color: 'var(--primary-light)' }}
        >
          <FaUserCircle size={22} />
          Account
        </Link>
      </div>

    
      <div className="flex items-center gap-2 bg-[var(--secondary-light)] px-4 py-2 rounded-full shadow"
        style={{ color: 'var(--text-dark)' }}>
        <FaUserCircle size={24} color="var(--primary)" />
        <span className="font-semibold">{name || 'Guest'}</span>
      </div>
    </nav>
  );
};

export default Navbar;