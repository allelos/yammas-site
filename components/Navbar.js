import Link from 'next/link';


const YAMMAS_LOGO = '../public/images/logo_white_.png'
const Navbar = ({ ...props }) => (
  <div className={`navbar-container ${props.border ? 'border' : 'noBorder' }`}>
    <Link href="/">
      { props.theme === 'dark' ?
        <a className="navbar-logo">
          <img src="/static/img/Yammas-01.JPG" alt="Yammas Logo" />
        </a>
        :
        <a className="navbar-logo">
          <img src="https://s3-eu-west-1.amazonaws.com/yammas-s3-bucket-storage/img/yammas_logo_white.png" alt="Yammas Logo" />
        </a>
      }
    </Link>
    <div className={props.theme === 'dark' ? 'navbar-links dark' : 'navbar-links light'}>
      <ul>
        <Link prefetch href="/contact">
          <li><a>Επικοινωνία</a></li>
        </Link>
        <Link prefetch href="/business">
          <li>Για επιχειρήσεις</li>
        </Link>
      </ul>
    </div>
    <style jsx>{`
      .navbar-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        height: 64px;
        z-index: 1;
      }
      .navbar-container.border {
        border-bottom: 1px solid #f4f4f4;
      }
      .navbar-logo {
        flex: 1;
      }
      .navbar-logo > img {
        display: block;
        width: auto;
        height: 64px;
        cursor: pointer;
      }

      @media (max-width: 767px) {
        .navbar-logo > img {
          height: 64px;
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
        margin-left: 1em;
        cursor: pointer;
        padding-bottom: 4px;
        transition: all 250ms ease-in-out;
      }
      .navbar-links.dark > ul > li {
        color: #d32f2f;
      }
      .navbar-links.light > ul > li {
        color: #ffffff;
      }
      .navbar-links.dark > ul > li:hover {
        color: #9c2222;
      }
      .navbar-links.light > ul > li:hover {
        color: #d32f2f;
      }

    `}</style>
  </div>
);

export default Navbar;