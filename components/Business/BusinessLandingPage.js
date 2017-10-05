import React from 'react';
import { 
  Events,
  scrollSpy,
  Element, 
} from 'react-scroll';

import Header from './Header';
import Navbar from '../Navbar';
import Footer from '../Footer';
import WhatWeOffer from './WhatWeOffer';
import WhyYammas from './WhyYammas';
import Awards from './Awards';
import Partner from './Partner';

class BusinessLandingPage extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', () => {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="business-container">
        <Navbar theme={'dark'} />
        <Header />
        <WhatWeOffer />
        <WhyYammas />
        <Awards />
        <Element name="Partner">
          <Partner />
        </Element>
        <Footer />
        <style jsx>{`
          .business-container {
            display: flex;
            flex-direction: column;
          }
        `}</style>
      </div>
    );
  }
}

export default BusinessLandingPage;
