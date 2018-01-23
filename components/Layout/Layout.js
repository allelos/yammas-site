import React from "react";

import Head from "next/head";

import { initGA, logPageView } from "../../utilities/analytics";

import { global } from "./globalStyles";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    const { children, title } = this.props;
    return (
      <div>
        <Head>
          <title>Yammas! | {title}</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0"
            width="width=device-width"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cloud.typography.com/7910556/6405392/css/fonts.css"
          />
          <link rel="stylesheet" href="/static/css/sanitize.css" />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        {children}
        <style jsx global>
          {global}
        </style>
      </div>
    );
  }
}

export default Layout;
