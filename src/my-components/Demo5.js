import React, { Component } from 'react';

class Demo5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
      imageUrl: null,
    };
  }

  handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      this.setState({
        selectedImage: file,
        imageUrl: imageUrl,
      });
    }
  }

  render() {
    return (
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={this.handleImageUpload}
        />

        {this.state.selectedImage && (
          <div>
            <h4>Uploaded Image:</h4>
            <img src={this.state.imageUrl} alt="Uploaded" style={{ maxHeight: '150px' }} />
            {/* Adjust the maxWidth to set the desired size (e.g., '50%') */}
          </div>
        )}
      </div>
    );
  }
}

export default Demo5;