import React from 'react';
import { 
  Events,
  scrollSpy,
  Element, 
} from 'react-scroll';

import Header from '../components/Header';
import Testimonials from '../components/Testimonials';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const Section1 = () => (
  <section>
    <style jsx>{`
      height: 640px;
      background: #e6af4b;
    `}</style>
  </section>
);

const Section2 = () => (
  <section>
    <style jsx>{`
      height: 640px;
      background: #373737;
    `}</style>
  </section>
);

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

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
      <div>
        <Header />
        <Testimonials />
        <Element name="Section2">
          <Subscribe />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
