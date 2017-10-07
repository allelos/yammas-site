import { Link } from 'react-scroll';

const Header = () => (
  <div className="business-header--container">
    <div className="business-header--content">
      <h1>Θέλεις να γίνεις συνεργάτης;</h1>
      <p>Η εφαρμογή που φέρνει την αλλαγή στην αγορά της ψυχαγωγίας</p>
      <Link to="Partner" duration={1000} delay={25} smooth>
        <button className="cta-button">Γίνε συνεργάτης</button>
      </Link>
    </div>
    <style jsx>{`
      .business-header--container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: calc(100vh - 64px);
        width: 100vw;
        justify-content: center;
        align-items: center;
      }
      .business-header--content {
        font-size: 2em;
        padding-left: 1em;
        padding-right: 1em;
      }
      .business-header--content > h1 {
        color: #333;
        margin: 0 0 0.25em 0;
        line-height: 1.1;
      }
      .business-header--content > p {
        color: #333;
        margin: 0 0 1em 0;
        line-height: 1.4;
      }

      .cta-button {
        display: inline-block;
        background: #d32f2f;
        outline: 0;
        color: #fff;
        border-radius: 32px;
        padding: 1rem 3rem;
        border: 2px solid #c73030;
        font-size: 1rem;
        font-family: "proxima-nova", sans-serif;
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
    `}</style>
  </div>
);

export default Header;
