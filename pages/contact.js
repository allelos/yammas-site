import React from 'react';

import Layout from '../components/Layout/Layout';
import ContactPage from '../components/Contact/Contact';

class Contact extends React.Component {
  render() {
    return (
      <Layout title="Επικοινωνία">
        <ContactPage />
      </Layout>
    );
  }
} 

export default Contact;
