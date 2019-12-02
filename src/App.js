import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state ={
    selectedFile: null
  }

  fileUploadHandler = event => {
    
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
        <button onClick={this.fileSelectedHandler}>Upload</button>
      </div>
    );
  }
}

export default App;
