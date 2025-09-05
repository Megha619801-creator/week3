// import logo from '../assets/images/logo.svg'
import PageLinks from './PageLinks';
// import  SocialLinks  from './SocialLinks';
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="nav-center">
//         <div className="nav-header">
//           <img src={logo}className="nav-logo" alt="backroads" />
//           <button type="button" className="nav-toggle" id="nav-toggle">
//             <i className="fas fa-bars"></i>
//           </button>
//         </div>
//         <ul className="nav-links" id="nav-links">
//          <PageLinks parentClass='nav-links' itemClass='nav-link' />
//         </ul>
//         <ul className="nav-icons">
//           <li>
//             <a
//               href="https://www.facebook.com"
//               target="_blank"
//               rel="noreferrer"
//               className="nav-icon"
//             >
//               <i className="fab fa-facebook"></i>
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.x.com"
//               target="_blank"
//               rel="noreferrer"
//               className="nav-icon"
//             >
//               <i className="fab fa-x-twitter"></i>
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://www.squarespace.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="nav-icon"
//             >
//               <i className="fab fa-squarespace"></i>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import logo from '../assets/images/logo.svg'


function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars" />
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            <PageLinks parentClass='nav-links' itemClass='nav-link' />
            </ul>
          <ul className="nav-icons" id='nav-icons'>
            {/* <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <i className="fab fa-facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <i className="fab fa-x-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.squarespace.com/"
                target="_blank"
                rel="noreferrer"
                className="nav-icon"
              >
                <i className="fab fa-squarespace" />
              </a>
            </li> */}
            <SocialLinks parentClass='nav-icons' itemClass='nav-icon' />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;