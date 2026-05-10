import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="container">
      <h2>SkillSync AI</h2>

      <Link to="/">Home</Link> |
      <Link to="/login"> Login</Link> |
      <Link to="/register"> Register</Link> |
      <Link to="/dashboard"> Dashboard</Link>
    </nav>
  );
}

export default Navbar;