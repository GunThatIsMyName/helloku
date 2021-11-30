import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
          }}
          to="/create"
        >
          New blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
