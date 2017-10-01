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
