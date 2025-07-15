import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaUserCircle, FaServicestack, FaSignOutAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux_toolkit/userSlice';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const {user} = useSelector(store=>store.user);
  const dispatch= useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
   
    setDropdownOpen(false);

    navigate('/login');
    dispatch(setUser({}));
    localStorage.clear();
  };


  const navLinks = (
    <>
      <Link
        to="/"
        className="flex items-center gap-2 text-lg font-medium hover:text-[var(--accent)] transition-colors"
        style={{ color: 'var(--primary-light)' }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <FaHome size={22} />
        Home
      </Link>
      <Link
        to="/services"
        className="flex items-center gap-2 text-lg font-medium hover:text-[var(--accent)] transition-colors"
        style={{ color: 'var(--primary-light)' }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <FaServicestack size={22} />
        Services
      </Link>
      { user.role=='admin' && <Link
        to="/admin/addservice"
        className="flex items-center gap-2 text-lg font-medium hover:text-[var(--accent)] transition-colors"
        style={{ color: 'var(--primary-light)' }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <FaServicestack size={22} />
        Add Services
      </Link>}
      <Link
        to="/register_user"
        className="flex items-center gap-2 text-lg font-medium hover:text-[var(--accent)] transition-colors"
        style={{ color: 'var(--primary-light)' }}
        onClick={() => setMobileMenuOpen(false)}
      >
        <FaUserCircle size={22} />
        Account
      </Link>
    </>
  );

  return (
    <nav
      className="flex items-center justify-between px-4 md:px-8 py-4 shadow-lg fixed top-0 left-0 w-full z-50"
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


      <div className="hidden md:flex gap-8">{navLinks}</div>


      <div className="relative" ref={dropdownRef}>
        <div
          className="flex items-center gap-2 bg-[var(--secondary-light)] px-4 py-2 rounded-full shadow cursor-pointer select-none"
          style={{ color: 'var(--text-dark)' }}
          onClick={() => setDropdownOpen((prev) => !prev)}
        >
          <FaUserCircle size={24} color="var(--primary)" />
          <span className="font-semibold max-w-[100px] truncate">{user.fullName || 'Guest'}</span>
        </div>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-[var(--primary-light)] z-50">
            <button
              className="flex items-center gap-2 w-full px-4 py-3 text-[var(--primary-dark)] hover:bg-[var(--primary-light)] rounded-xl transition"
              onClick={handleLogout}
            >
              <FaSignOutAlt size={18} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>


      <button
        className="md:hidden ml-4 text-[var(--primary-light)] focus:outline-none"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label="Open Menu"
      >
        {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>


      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 flex md:hidden">
          <div
            className="flex flex-col gap-6 bg-[var(--primary-dark)] w-3/4 max-w-xs h-full p-8 shadow-2xl"
            style={{ color: 'var(--primary-light)' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <FaServicestack size={28} color="var(--accent)" />
              <span className="text-xl font-bold tracking-wide" style={{ color: 'var(--primary-light)' }}>
                SnapHelp
              </span>
            </div>
            {navLinks}
            <div className="mt-auto">
              <button
                className="flex items-center gap-2 w-full px-4 py-3 text-[var(--primary-dark)] bg-[var(--primary-light)] rounded-xl font-semibold hover:bg-[var(--primary)] hover:text-white transition"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleLogout();
                }}
              >
                <FaSignOutAlt size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>

          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;