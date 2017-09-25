import Header from '../components/Header';

const Index = () => (
  <div>
    <Header />
    <style jsx global>{`
      :root {
        --step-up-5: 2em;
        --step-up-4: 1.7511em;
        --step-up-3: 1.5157em;
        --step-up-2: 1.3195em;
        --step-up-1: 1.1487em;
        /* baseline: 1em */
        --step-down-1: 0.8706em;
        --step-down-2: 0.7579em;
        --step-down-3: 0.6599em;
        --step-down-4: 0.5745em;
        --step-down-5: 0.5em;
      }

      body {
        padding: 0;
        margin: 0;
        font-size: 16px;
      }

      h1, h2, h3,
      h4, h5, h6 {
        margin: 0.5rem;
        font-family: 'Avenir Next', sans-serif;
        font-weight: 700;
        line-height: 1.6;
      }

      h1 {
        font-size: var(--step-up-5);
      }

      h2 {
        font-size: var(--step-up-4);
      }

      h3 {
        font-size: var(--step-up-3);
      }

      h4 {
        font-size: var(--step-up-2);
      }

      h5 {
        font-size: var(--step-up-1);
      }

      li {
        font-family: 'Avenir Next', sans-serif;
        font-size: var(--step-down-1);
      }
    `}</style>
  </div>
);

export default Index;