import React from 'react';

import LandingPage from '../components/LandingPage';
import Layout from '../components/Layout/Layout';


class Index extends React.Component {
  render() {
    return (
      <Layout title="Ο σύγχρονος τρόπος κεράσματος!">
        <LandingPage />
      </Layout>
    );
  }
} 

export default Index;
