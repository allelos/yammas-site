import SubscribeForm from './SubscribeForm';

const action = "//yammas.us14.list-manage.com/subscribe/post?u=0b40730952b31438a74a75472&amp;id=92a84c9ca9"
const Subscribe = () => (
  <section className="subscribe-container">
    <div className="subscribe-title">
      <h1>Μπές στην παρέα</h1>
      <h3>Κάνε εγγραφή για να μαθαίνεις πρώτος τα νέα μας</h3>
    </div>
    <SubscribeForm action={action} />
    <style jsx>{`
      .subscribe-container {
        display: flex;
        flex-flow: row wrap;
        background: #d32f2f;
        padding-top: 4rem;
        padding-bottom: 4rem;
      }
      .subscribe-title {
        flex 1 100%;
        font-size: var(--step-up-3);
        color: white;
        margin-bottom: 2rem;
      }
      .subscribe-title > h1,
      .subscribe-title > h3, {
        text-align: center;
        font-style: normal;
      }
      .subscribe-title > h1 {
        font-weight: 800;
      }
      .subscribe-title > h3 {
        font-weight: 300;
        color: #f7f7f7;
      }
    `}</style>
  </section>
);

export default Subscribe;
