import FontAwesome from 'react-fontawesome';

const WhyYammas = () => (
  <div className="whyyammas--container">
    <div className="whyyammas--left">
      <h1>Γιατί Yammas;</h1>
    </div>
    <div className="whyyammas--right">
      <div className="whyyammas--right-container">
        <div className="whyyammas--right--item">
          <div className="whyyammas--right--item-icon">
            <FontAwesome
              name="angle-right"
              size="2x"
              style={{ color: '#d32f2f'}}
            />
          </div>
          <p>
            Συνδέει τους φυσικούς πελάτες με τους
            ψηφιακούς τους φίλους
          </p>
        </div>
        <div className="whyyammas--right--item">
          <div className="whyyammas--right--item-icon">
            <FontAwesome
              name="angle-right"
              size="2x"
              style={{ color: '#d32f2f'}}
            />
          </div>
          <p>
            Νέες εποχές νέες ανάγκες
          </p>
        </div>
        <div className="whyyammas--right--item">
          <div className="whyyammas--right--item-icon">
            <FontAwesome
              name="angle-right"
              size="2x"
              style={{ color: '#d32f2f'}}
            />
          </div>
          <p>
            Προσθέτει έσοδα και φήμη            
          </p>
        </div>
        <div className="whyyammas--right--item">
          <div className="whyyammas--right--item-icon">
            <FontAwesome
              name="angle-right"
              size="2x"
              style={{ color: '#d32f2f'}}
            />
          </div>
          <p>
            Τις τιμές τις επιλέγει η επιχείρηση            
          </p>
        </div>
        <div className="whyyammas--right--item">
          <div className="whyyammas--right--item-icon">
            <FontAwesome
              name="angle-right"
              size="2x"
              style={{ color: '#d32f2f'}}
            />
          </div>
          <p>
            Απλό και ευέλικτο στην χρήση            
          </p>
        </div>
        <div className="whyyammas--right--item">
          <div className="whyyammas--right--item-icon">
            <FontAwesome
              name="angle-right"
              size="2x"
              style={{ color: '#d32f2f'}}
            />
          </div>
          <p>
            Το κέρασμα δίνει ζωντάνια
          </p>
        </div>
      </div>
    </div>
    <style jsx>{`
      .whyyammas--container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        min-height: 50vh;
        min-width: 100vw;
      }
      .whyyammas--left {
        box-sizing: border-box;
        background: #d32f2f;
        display: flex;
        flex: 1 50%;
        justify-content: center;
        align-items: center;
        font-size: 2em;
        color: #ffffff;
        padding-left: 1em;
        padding-right: 1em;
      }
      .whyyammas--left > h1 {
        margin-top: 0;
        margin-bottom: 0;
        line-height: 1.1;
      }
      .whyyammas--right {
        display: flex;
        flex-wrap: wrap;
        flex: 1 50%;
        align-items: center;
        background: #f4f4f4;
      }
      .whyyammas--right-container {
        display: flex;
        flex-direction: column;
        padding-left: 4em;
        padding-right: 4em;
      }
      .whyyammas--right--item {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .whyyammas--right--item-icon {
        margin-right: 1em;
      }
      .whyyammas--right--item > p {
        font-size: 1.5em;
        color: #333;
      }
      @media (max-width: 767px) {
        .whyyammas--container {
        }
        .whyyammas--left {
          flex-basis: 100%;
          padding-bottom: 1em;
          padding-top: 1em;
        }
        .whyyammas--right {
          flex-basis: 100%;
          padding-top: 2em;
          padding-bottom: 2em;
        }
      } 
    `}</style>
  </div>
);

export default WhyYammas;
