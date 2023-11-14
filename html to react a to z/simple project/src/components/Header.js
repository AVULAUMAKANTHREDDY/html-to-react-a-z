const Header = () => {
  return (
    <nav class="navbar  bg-light navbar-light">
     <div className="nav-content">
        <div>
        <p className="website-logo">RA</p>
        </div>
      <div>
      <ul className="nav-menu ml-auto">
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
            alt="Linked In"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
            alt="Git Hub"
          />
        </li>
        <li>
          <img
            className="social-network-img"
            src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
            alt="Twitter"
          />
        </li>
      </ul>
      </div>
    </div>
   
    </nav>
  );
};

export default Header;
