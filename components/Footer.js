import Link from 'next/link';
import FontAwesome from 'react-fontawesome';


const Footer = () => (
  <footer>
    <div className="left">
      <div className="links">
        <Link href="">
          <a href="" className="link">Για επιχειρήσεις</a>
        </Link>
        <Link href="/">
          <a href="" className="link">Επικοινωνία</a>
        </Link>
      </div>
      <div className="copyright">
        <span>2016-2017 Yammas. All Rights Reserved</span>
      </div>
    </div>
    <div className="center">
      <div className="column-title">
        <h5>
          We&nbsp;
          <FontAwesome name="heart" style={{ color: '#d32f2f' }} className="test" />
          &nbsp;new friends
        </h5>
      </div>
      <div className="social-container">
          <a href="https://www.facebook.com/yammas.gr/" target="_blank">
            <FontAwesome name="facebook" style={{ color: '#7b7b7b' }} />
          </a>
          <a href="https://www.instagram.com/yammas.gr/" target="_blank">
            <FontAwesome name="instagram" style={{ color: '#7b7b7b' }} />
          </a>
          <a href="https://twitter.com/SocialYammas" target="_blank">
            <FontAwesome name="twitter" style={{ color: '#7b7b7b' }} />
          </a>
        </div>
    </div>
    <div className="right">
        <div className="awards-title">
          <h5>Διακρίσεις</h5>
        </div>
        <div className="awards">
          <img src="https://ovolus.com/sites/all/themes/mazeblock_theme/images/befinnovative.svg" />
        </div>
    </div>
    <style jsx>{`
      footer {
        display: flex;
        flex-flow: row wrap;
        align-items: flex-start;
        background: #373737;
        padding: 3rem 1rem 3rem 1rem;
      }
      footer > div {
        display: flex;
        flex-flow: column wrap;
        flex: 1 1 33%;
      }
      .left {
        flex-flow: column wrap;
        justify-content: flex-end;
        align-items: flex-start;
      }
      .center {
        justify-content: flex-end;
        align-items: center;
      }
      .right {
        justify-content: flex-end;
        align-items: flex-end;
      }
      .column-title > h5 {
        font-weight: 300;
        color: #7b7b7b;
      }
      .column-title {
        display: flex;
        flex: 1 2 auto;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 0.5rem;
      }
      .social-container {
        display: flex;
        flex: 1 1 auto;
        flex-flow: row wrap;
        align-items: flex-start;
      }
      .social-container > a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        width: 32px;
        background: #525050;
        border-radius: 100%;
        margin-right: 8px;
        cursor: pointer;
        text-decoration: none;
        transition: all 125ms ease-in-out;
      }
      .social-container > a:hover {
        background: #2b2b2b;
      }
      .link {
        font-family: "proxima-soft", sans-serif;
        font-size: var(--step-down-1);
        text-decoration: none;
        color: #7b7b7b;
        transition: all 125ms ease-in-out;
        margin-right: 8px;
      }
      .link:hover {
        color: #a5a5a5;
      }
      .copyright {
        font-family: "proxima-soft", sans-serif;
        font-size: var(--step-down-1);
        color: #525050;
      }
      .awards-title {
        display: flex;
        flex: 1 1 100%;
        align-items: flex-end;
        margin-bottom: 2px;
      }
      .awards-title > h5 {
        font-weight: 300;
        font-style: normal;
        color: #7b7b7b;
      }
      .awards {
        display: flex;
        flex: 1 1 100%;
        align-items: flex-start;
      }
      .awards > img {
        height: 32px;
        background: #fff;
        padding: 4px;
        border-radius: 4px;
      }
      .column-title {
        animation: pulse 2s infinite;
      }
      @media (max-width: 768px) {
        .center {
          order: 1;
        }
        .right {
          order: 2;
          align-items: center;
        }
        .left {
          order: 3;
          align-items: center;
          margin-top: 2rem;
        }
        footer > div {
          flex: 1 100%;
          margin-bottom: 2rem;
        }
      }
      @keyframes pulse {
        0% { tranform: scale(1); }
        100% { transform: scale(1.2); }
      }
    `}</style>
  </footer>
);

export default Footer;
  