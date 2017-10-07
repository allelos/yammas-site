const Awards = () => (
  <div className="awards--container">
    <div className="awards--left">
      <div className="awards--item">
        <img src="/static/img/befinnovative_logo.png" />
      </div>
    </div>
    <div className="awards--right">
      <h1>Διακρίσεις</h1>
      <p>
        Η ομάδα μας διακρίθηκε και βραβεύτηκε στο πλαίσιο του
        προγράμματος επιχειρηματικής επιτάχυνσης befinnnovative
        της Εθνικής Τράπεζας.
      </p>
    </div>
    <style jsx>{`
      .awards--container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        min-height: 50vh;
        width: 100vw;
      }
      .awards--right {
        box-sizing: border-box;
        background: #d32f2f;
        display: flex;
        flex-direction: column;
        flex: 1 0 50%;
        justify-content: center;
        align-items: flex-end;
        font-size: 2em;
        color: #ffffff;
        padding-left: 1em;
        padding-right: 1em;
      }
      .awards--right > h1 {
        margin-top: 0;
        margin-bottom: 0;
      }
      .awards--right > p {
        font-size: 0.75em;
        text-align: right;
        line-height: 1.4;
        color: #f7f7f7;
        margin-top: 0;
      }
      .awards--left {
        display: flex;
        flex: 1 0 50%;
        align-items: center;
        background: #f4f4f4;
      }
      .awards--item {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .awards--item > img {
        box-sizing: border-box;
        width: 60%;
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
      }
      @media (max-width: 767px) {
        .awards--container {
          //min-height: 750px;
        }
        .awards--left {
          flex-basis: 100%;
          padding-top: 4em;
          padding-bottom: 4em;
          order: 2;
        }
        .awards--right {
          flex-basis: 100%;
          align-items: center;
          order: 1;
          padding-top: 1em;
          padding-bottom: 1em;
        }
        .awards--right > h1 {
          margin-top: 0;
        }
        .awards--right > p {
          font-size: 0.75em;
          text-align: center;
        }
      }
    `}</style>
  </div>
);

export default Awards;