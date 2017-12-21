export const global =`
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
  html {
    //position: relative;
    //height: auto;
    //min-height: 100%;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    line-height: 1.4em;
  }

  h1, h2, h3,
  h4, h5, h6 {
    margin: 0 0 0.125em 0;
    font-family: 'proxima-nova', sans-serif;
    font-style: normal;
    font-weight: 800;
    line-height: 1.4em;
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
    font-family: 'proxima-soft', sans-serif;
    font-size: 1em;
    font-style: normal;
    font-weight: 300;
  }

  p { 
    font-family: 'proxima-nova', sans-serif;
    font-size: 1em;
    font-style: normal;
    font-weight: 300;
  }
  @media (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }
  .markdown > h3 { 
    color: #484848;
    font-family: 'proxima-nova', sans -serif;
    font-weight: 500;
    margin-top: 1.5rem;
  }
  .markdown > ul > li {
    font-family: 'proxima-nova', sans-serif;
    font-size: 1em;
    font-weight: 300;
    color: #484848;
  }
`;
