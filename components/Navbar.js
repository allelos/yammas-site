const YAMMAS_LOGO = '/public/images/Yammas-01.png';
const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar-logo">
      <img src="https://yammas-s3-bucket-storage.s3.amazonaws.com/img/logo2.png" alt="Yammas Logo" />
    </div>
    <div className="navbar-links">
      <ul>
        <li>Επικοινωνία</li>
        <li>Επαγγελματίες</li>
      </ul>
    </div>
    <style jsx>{`
      .navbar-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
        //background: rgba(255,255,255,0.125);
        z-index: 1;
      }
      .navbar-logo {
        flex: 1;
      }
      .navbar-logo > img {
        display: block;
        width: auto;
        height: 56px;
        cursor: pointer;
      }
      .navbar-links {
        flex: 1;
      }
      .navbar-links > ul {
        text-align: right;
        padding: 0 16px;
      }
      .navbar-links > ul > li {
        display: inline;
        color: #f7f7f7;
        margin-left: 1em;
        cursor: pointer;
        padding-bottom: 4px;
        transition: all 250ms ease-in-out;
      }
      .navbar-links > ul > li:hover {
        color: #d32f2f;
      }

    `}</style>
  </div>
);

export default Navbar;