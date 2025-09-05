import React from "react";
import PageLink from "./PageLink";
function Footer() {
  return (
    <>
      {/* Footer  section starts */}
      <footer className="section footer">
        <PageLinks parentClass='footer-links' itemClass='footer-link' />
        <p className="copyright">
          copyright © travel tours company <span id="date" />. all rights reserved
        </p>
      </footer>
      {/* Footer  section starts */}
    </>

  );
}

export default Footer;
