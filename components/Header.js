import { Link } from 'react-scroll';
import Navbar from './Navbar';

const YAMMAS_VIDEO = 'https://s3-eu-west-1.amazonaws.com/yammas-s3-bucket-storage/videos/yammasapp.webm';
const Header = () => (
  <div className="header-container">
    <Navbar />
    <video
      className="video-inner"
      autoPlay
      loop
      muted
    >
      <source src={YAMMAS_VIDEO} type="video/webm" />
    </video>
    <div className="video-banner">
      <h1>Yammas, ο σύγχρονος τρόπος κεράσματος.</h1>
      <h3>
        Το μόνο που χρειάζεσαι για ένα κέρασμα είναι μια αφορμή
      </h3>
      <Link to="Section2" duration={1000} delay={25} smooth>
        <button className="cta-button">Μπες στην παρέα</button>
      </Link>
    </div>
    <style jsx>{`
      .header-container {
        position: relative;
        display: block;
        min-width: 100%;
        min-height: 100vh;
        overflow: hidden;
      }
      .video-inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -1;
      }
      .video-banner {
        position: absolute;
        display: block;
        padding: 2em 0;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        color: #f4f4f4;
        font-size: 1.25em;
        text-align: center;
        //background: rgba(255,255,255,0.125);
      }

      .video-banner > h3 {
        color: #f4f4f4;
        font-weight: 300;
        //opacity: 0.75;
      }

      .cta-button {
        display: inline-block;
        background: #d32f2f;
        margin-top: 1.875em;
        outline: 0;
        color: #fff;
        border-radius: 32px;
        padding: 0.75rem 3rem;
        border: 2px solid #c73030;
        font-size: 1rem;
        font-family: 'proxima-soft', sans-serif;
        font-style: normal;
        font-weight: 300;
        cursor: pointer;
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        transition: all 125ms ease-in-out;
        cursor: pointer;
      }

      .cta-button:hover {
        box-shadow: 0px 6px 6px 0px rgba(0,0,0,0.25);
      }

      .cta-button:active {
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
      }

      @media (max-width: 768px) {
        .header-container {
          background: url('/static/img/pattern.png');
        }
        .video-inner {
          display: none;
        }
        .cta-button {
          padding: 0.5rem 3rem;
        } 
      }
    `}</style>
  </div>
);

export default Header;
