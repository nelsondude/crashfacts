import React, { Component } from 'react';
import './App.css';
import Sidebar from "../components/Sidebar/Sidebar";
import Text from "../components/Text/Text";
import Info from "../components/Info/Info";
import Lecture from "../components/Lecture/Lecture";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-3">
            <Sidebar/>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-8">
                <Text/>
                <Info/>
              </div>
              <div className="col-4">
                <Lecture/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
