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
          <div className="col-2">
            <Sidebar/>
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-7">
                <Text/>
                <Info/>
              </div>
              <div className="col-5">
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
