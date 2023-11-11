import React, { Component } from 'react';
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';

class Demo2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: this.getPreferenceFromLocalStorage('backgroundImage', image1), // Default to image1
      backgroundColor: this.getPreferenceFromLocalStorage('backgroundColor', ''), // Default to no background color
    };
  }

  // Retrieve a preference from Local Storage with a fallback default value
  getPreferenceFromLocalStorage(key, defaultValue) {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? storedValue : defaultValue;
  }

  // Handle changes in background image preference
  handleBackgroundImageChange = (image) => {
    this.setState({ backgroundImage: image, backgroundColor: '' }); // Update the key and remove background color
    // Store the preferences in Local Storage
    localStorage.setItem('backgroundImage', image);
    localStorage.setItem('backgroundColor', '');
  }

  // Handle changes in background color preference
  handleBackgroundColorChange = (color) => {
    this.setState({ backgroundColor: color, backgroundImage: '' }); // Update the key and remove background image
    // Store the preferences in Local Storage
    localStorage.setItem('backgroundImage', '');
    localStorage.setItem('backgroundColor', color);
  }

  render() {
    const globalTextBlack = {
      color: 'black', // Change text color to black for all text elements
    };

    const componentStyle = {
      background: this.state.backgroundImage
        ? `url(${this.state.backgroundImage})`
        : this.state.backgroundColor, // Conditional background property
      height: '400px',
      padding: '20px',
      border: '1px solid #000',
      color: 'white',
      key: this.state.key, // Add a unique key to force re-render
    };

    return (
      <div style={componentStyle}>
        <h2 style={globalTextBlack}>Choose Background Image:</h2>
        <div>
          <button onClick={() => this.handleBackgroundImageChange(image1)}>Image 1</button>
          <button onClick={() => this.handleBackgroundImageChange(image2)}>Image 2</button>
          <button onClick={() => this.handleBackgroundImageChange(image3)}>Image 3</button>
        </div>

        <div>
          <h3 style={globalTextBlack}>Choose Background Color:</h3>
          <button
            onClick={() => this.handleBackgroundColorChange('#FFFF99')}
            className={this.state.backgroundColor === '#FFFF99' ? 'selected' : ''}
          >
            Yellow
          </button>
          <button
            onClick={() => this.handleBackgroundColorChange('lightblue')}
            className={this.state.backgroundColor === 'lightblue' ? 'selected' : ''}
          >
            Blue
          </button>
          <button
            onClick={() => this.handleBackgroundColorChange('lightgreen')}
            className={this.state.backgroundColor === 'lightgreen' ? 'selected' : ''}
          >
            Green
          </button>
          <button
            onClick={() => this.handleBackgroundColorChange('lightcoral')}
            className={this.state.backgroundColor === 'lightcoral' ? 'selected' : ''}
          >
            Red
          </button>
          <button
            onClick={() => this.handleBackgroundColorChange('lightsalmon')}
            className={this.state.backgroundColor === 'lightsalmon' ? 'selected' : ''}
          >
            Orange
          </button>
          <button
            onClick={() => this.handleBackgroundColorChange('white')}
            className={this.state.backgroundColor === 'white' ? 'selected' : ''}
          >
            White
          </button>
        </div>
      </div>
    );
  }
}

export default Demo2;