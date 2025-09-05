import logo from '../assets/images/logo.svg'
import PageLinks from './PageLinks';
import  SocialLinks  from './SocialLinks';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo}className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
         <PageLinks parentClass='nav-links' itemClass='nav-link' />
        </ul>
        <ul className="nav-icons">
          <SocialLinks parentClass='nav-links' itemClass='nav-link' />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
