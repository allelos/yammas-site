import React from 'react';
import { initGA, logPageView } from '../utilities/analytics';

import BusinessLandingPage from '../components/Business/BusinessLandingPage';


class Business extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return (
      <BusinessLandingPage />
    );
  }
} 

export default Business;