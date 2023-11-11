import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Galaxy04 from './Images/Galaxy04.jpeg';
import Iphone11 from './Images/Iphone11.webp';
import Iphone13 from './Images/Iphone13.webp';
import NokiaG20 from './Images/NokiaG20.jpg';
import OPPOA17 from './Images/OPPOA17.jpg';

export class Demo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Galaxy04, Iphone11, Iphone13, NokiaG20, OPPOA17],
      currentIndex: 0
    };
  }

  componentDidMount() {
    this.startSlideshow();
  }

  componentWillUnmount() {
    this.stopSlideshow();
  }

  startSlideshow = () => {
    this.slideshowInterval = setInterval(this.nextSlide, 2000); // Change image every 2 seconds
  }

  stopSlideshow = () => {
    clearInterval(this.slideshowInterval);
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.state.images.length
    }));
  }

  render() {
    return (
      <div style={slideshowStyle}>
        <div>
          <img
            style={{ height: '400px' }}
            src={this.state.images[this.state.currentIndex]}
            alt='image'
          />
        </div>
      </div>
    );
  }
}

Demo1.propTypes = {
  state: PropTypes.object.isRequired
};

const slideshowStyle = {
  minHeight: '40vh', // Adjust the minHeight to accommodate larger images
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default Demo1;