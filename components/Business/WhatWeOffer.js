import FontAwesome from 'react-fontawesome';

const WhatWeOffer = () => (
  <div className="whatweoffer--container">
    <div className="whatweoffer--title">
      <h1>Τι προσφέρουμε</h1>
      <hr className="divider" />
    </div>
    <div className="whatweoffer--grid">
      <div className="offerbox--container">
        <div className="offerbox-icon--container">
          <FontAwesome
            name="line-chart"
            size="2x"
            style={{ color: '#fff' }}
          />
        </div>
        <h3>Dashboard</h3>
        <p>Ολοκληρωμένο πληροφοριακό σύστημα για πλήρη διαδικτυακή διαχείριση, στατιστικά, αναλύσεις και ιστορικό των ψηφιακών κερασμάτων.</p>
      </div>
      <div className="offerbox--container">
        <div className="offerbox-icon--container">
          <FontAwesome
            name="envelope-o"
            size="2x"
            style={{ color: '#fff' }}
          />
        </div>
        <h3>Ενημέρωση</h3>
        <p>Δωρεάν και αυτοματοποιημένη ενημέρωση των πελατών σας, για τα ψηφιακά τους κεράσματα στην επιχείρηση σας.</p>
      </div>
      <div className="offerbox--container">
        <div className="offerbox-icon--container">
          <FontAwesome
            name="credit-card"
            size="2x"
            style={{ color: '#fff' }}
          />
        </div>
        <h3>Συναλλαγές</h3>
        <p>Εγγυημένη είσπραξη κερδών στον λογαριασμό σας, με αυστηρές προδιαγραφές και με βάση τα διεθνή πρότυπα από την Εθνική Τράπεζα.</p>
      </div>
    </div>
    <style jsx>{`
      .whatweoffer--container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        min-height: 50vh;
        min-width: 100vw;
        align-items: center;
      }
      .whatweoffer--title {
        flex: 1 100%;
        color: #333;
        font-size: 1.5em;
      }
      .whatweoffer--title > h1 {
        margin-bottom: 0;
      }
      .whatweoffer--grid {
        display: flex;
        flex: 1 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        margin-top: 4em;
        margin-bottom: 4em;
        padding-left: 1em;
        padding-right: 1em;
      }
      .offerbox--container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        flex: 1;
        justify-content: center;
        align-items: center;
        padding-left: 1.5em;
        padding-right: 1.5em;
      }
      .offerbox--container > h3 {
        color: #333;
        font-weight: 600;
      }
      .offerbox--container > p {
        color: #333;
        text-align: center;
        font-weight: 300;
        font-size: 1.25em;
        margin-top: 0;
        line-height: 1.4;
      }
      .offerbox-icon--container {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 1.25em;
        border-radius: 100%;
        background: #d32f2f;
        margin-bottom: 1em;
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
      @media (max-width: 767px) {
        .whatweoffer--grid {
          //min-height: 750px;
        }
        .offerbox--container {
          flex-basis: 100%;
        }
      }
    `}</style>
  </div>
);

export default WhatWeOffer;
