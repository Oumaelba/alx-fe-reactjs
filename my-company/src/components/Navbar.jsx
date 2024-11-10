import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: '#333',  // Set a background color
        display: 'flex',          // Use flex display
        justifyContent: 'space-around', // Space items evenly
        padding: '10px',
      }}
    >
      <Link to="/" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>About</Link>
      <Link to="/services" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', textDecoration: 'none', margin: '0 10px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;