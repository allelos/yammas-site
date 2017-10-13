import React from 'react';

import BusinessLandingPage from '../components/Business/BusinessLandingPage';
import Layout from '../components/Layout/Layout';

class Business extends React.Component {
  render() {
    return (
      <Layout title="Για επιχειρήσεις">
        <BusinessLandingPage />
      </Layout>
    );
  }
} 

export default Business;