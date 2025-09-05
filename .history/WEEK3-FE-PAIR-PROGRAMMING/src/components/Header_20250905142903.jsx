import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Header = () => {
  return (
    <header>
      <nav className="nav-center">
        <div className="nav-header">
          <h1 className="logo">YourLogo</h1>
        </div>

        {/* Page Links */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        {/* Social Links */}
        <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />
      </nav>
    </header>
  );
};

export default Header;
