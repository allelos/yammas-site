import PartnerForm from './PartnerForm';

const Partner = () => (
  <div className="partner--container">
    <div className="partner--title">
      <h1>Γίνε συνεργάτης</h1>
      <hr className="divider" />
    </div>
    <div className="partner--subtitle">
      <p>
        Συμπλήρωσε στην παρακάτω φόρμα τα απαιτούμενα στοιχεία
        για να γίνει η επιχείρηση σου συνεργάτης
      </p>
    </div>
    <div className="parnter--form">
      <PartnerForm />
    </div>
    <style jsx>{`
      .partner--container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 4em;
        padding-bottom: 4em;
      }
      .partner--title {
        color: #333;
        font-size: 1.5em;
      }
      .partner--title > h1 {
        margin-top: 0;
        margin-bottom: 0;
      }
      .partner--subtitle {
        width: 300px;
        font-size: 1.25em;
        color: #333;
      }
      .partner--subtitle > p {
        margin-top: 0;
        margin-bottom: 0;
        padding: 1.25em 0 1.25em 0;
        text-align: left;
      }
      .parnter--form {
        padding-bottom: 1.5em;
      }

      @media (min-width: 767px) {
        .partner--subtitle {
          width: 400px;
        }
        .partner--subtitle > p {
          text-align: center;
        }
      }

      .divider {
        display: block;
        box-sizing: border-box;
        background: #d32f2f;
        border: 1px solid #d32f2f;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        margin-left: 0;
        margin-right: 0;
        width: 33%;
      }
    `}</style>
  </div>
);

export default Partner;