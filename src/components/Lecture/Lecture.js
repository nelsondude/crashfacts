import React, { Component } from 'react';
import './Lecture.css';

class Lecture extends Component {
  state = {
    file: null,
    page: 1
  };

  constructor(props) {
    super(props);
    this.file = React.createRef();
  }

  handleChange = (event) => {
    console.log(event.target.files[0]);
    const url = URL.createObjectURL(event.target.files[0]);
    this.setState({file: url});
  };


  render() {
    return (
      <div className={'Lecture'}>
        <h3>Lecture Content:</h3>
        <input onChange={this.handleChange} type="file" ref={this.file}/>
        {this.state.file ?
          <object data={this.state.file + `#view=FitH&page=` + this.state.page} type="application/pdf">
          <embed src={this.state.file + `#view=FitH&page=` + this.state.page} type="application/pdf" />
        </object> : null}

      </div>
    )
  }
}

export default Lecture;