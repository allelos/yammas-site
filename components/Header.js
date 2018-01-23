import { Link } from "react-scroll";
import Navbar from "./Navbar";

const YAMMAS_VIDEO =
  "https://s3-eu-west-1.amazonaws.com/yammas-s3-bucket-storage/videos/yammasapp.webm";

const Header = () => (
  <div className="header-container">
    <Navbar />
    <video
      className="video-inner"
      autoPlay
      loop
      muted
      poster="/static/img/pattern.png"
    >
      <source src={YAMMAS_VIDEO} type="video/webm" />
    </video>
    <div className="video-banner">
      <h1>Yammas, ο σύγχρονος τρόπος κεράσματος.</h1>
      <h3>Το μόνο που χρειάζεσαι για ένα κέρασμα είναι μια αφορμή</h3>
      <Link to="Section2" duration={1000} delay={25} smooth>
        <button className="cta-button">Μπες στην παρέα</button>
      </Link>
      <div className="promote-app">
        <div className="promote-app--apple">
          <a
            href="https://itunes.apple.com/gr/app/yammas/id1320832035?mt=8"
            style={{
              display: "inline-block",
              overflow: "hidden",
              backgroundImage:
                "url(https://linkmaker.itunes.apple.com/assets/shared/badges/en-us/appstore-lrg.svg)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "270px",
              height: "80px",
            }}
          />
        </div>
        <div className="promote-app--google">
          <a
            href="https://play.google.com/store/apps/details?id=com.Yammas&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
            style={{
              display: "inline-block",
              overflow: "hidden",
              backgroundImage: "url(https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "80px",
              width: "310px"
            }}
          />
        </div>
      </div>
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
        font-family: "Gotham SSm A", "Gotham SSm B";
        font-style: normal;
        font-weight: 400;
        cursor: pointer;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        transition: all 125ms ease-in-out;
        cursor: pointer;
      }

      .cta-button:hover {
        box-shadow: 0px 6px 6px 0px rgba(0, 0, 0, 0.25);
      }

      .cta-button:active {
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
      }

      .promote-app {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 8rem;
      }

      @media (max-width: 768px) {
        .promote-app {
          flex-direction: column;
          padding-top: 4rem;
        }
        .promote-app--apple {
          margin-bottom: 1rem;
        }
      }
    `}</style>
  </div>
);

export default Header;
