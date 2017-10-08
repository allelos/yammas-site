import React from 'react';
import { initGA, logPageView } from '../utilities/analytics';

import LandingPage from '../components/LandingPage';


class Index extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return (
      <LandingPage />
    );
  }
} 

export default Index;
