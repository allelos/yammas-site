import Link from 'next/link';


const YAMMAS_LOGO = '../public/images/logo_white_.png'
const Navbar = () => (
  <div className="navbar-container">
    <Link href="/">
      <a className="navbar-logo">
        <img src="https://s3-eu-west-1.amazonaws.com/yammas-s3-bucket-storage/img/yammas_logo_white.png" alt="Yammas Logo" />
      </a>
    </Link>
    <div className="navbar-links">
      <ul>
        <li>Επικοινωνία</li>
        <li>Για επιχειρήσεις</li>
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

      @media (max-width: 767px) {
        .navbar-logo > img {
          height: 32px;
        }
      }
      .navbar-links {
        flex: 2;
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
        color: #e4233c;
      }

    `}</style>
  </div>
);

export default Navbar;