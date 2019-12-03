import React, { Component } from "react";
import "./App.css";
import EXIF from "exif-js";

class App extends Component {
  state = {
    selectedFile: null
  };

  fileUploadHandler = () => {
    console.log(this.state.selectedFile);
    EXIF.getData(this.state.selectedFile, function() {
      var allMetaData = EXIF.getAllTags(this);
      var long = EXIF.getTag(this, "GPSLongitude");
      var lat = EXIF.getTag(this, "GPSLatitude");
      console.log("long:" + long, "lat:" + lat);
      var toDecimal = function(number) {
        return (
          number[0].numerator +
          number[1].numerator / (60 * number[1].denominator) +
          number[2].numerator / (3600 * number[2].denominator)
        );
      };
      console.log(toDecimal(lat));
      console.log(toDecimal(long));
      console.log(allMetaData);
    });
  };

  fileHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  render() {
    return (
      <div className="App">
        <input type="file" onChange={this.fileHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default App;
