import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state ={
    selectedFile: null
  }

  fileUploadHandler = () => {
    console.log(this.state.selectedFile)

  }

  fileHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  render(){
    return (
      <div className="App">
        <input type="file" onChange={this.fileHandler}/>
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default App;
