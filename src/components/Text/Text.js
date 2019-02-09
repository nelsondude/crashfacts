import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Text.css';
import SpeechRecognition from 'react-speech-recognition';
import Phrase from './Phrase/Phrase';


const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
  stopListening: PropTypes.func,
  listening: PropTypes.bool,
  startListening: PropTypes.func
};

const NUM_CHARS = 5;


class Text extends Component {
  counter = 1;
  state = {
    phrases: []
  };

  handleAnalysis = () => {
    //Do API Call on this here
    let words = this.props.transcript
      .split(' ')
      .slice(NUM_CHARS*(this.counter-1), NUM_CHARS*this.counter)
      .join(' ');

    this.setState({phrases: [...this.state.phrases, <Phrase keywordsChanged={this.keywordsChanged} key={this.counter} words={words}/>]});

    //Returns a list of phrases ['hey there', 'blah blah'] ...
    //Store phrases and their offset which is NUM_CHARS*(this.counter - 1) + entity.offset

    this.counter += 1;
  };

  handleClick = (el) => {
    console.log(el);
  };

  keywordsChanged = (keywords) => {
    this.props.keywordsChanged(keywords);
  };

  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition,
      stopListening,
      listening,
      startListening
    } = this.props;
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    const transcript_words = transcript.split(' ');
    if (transcript_words.length - 3 > this.counter * NUM_CHARS) {
      this.handleAnalysis();
    }

    return (
      <div className={'Text'}>
        <h3>Transcript:</h3>
        <p style={{overflowY: 'auto', height: '300px'}}>
          {/*Phrase is an array of JSX elements*/}
          {this.state.phrases.flat()}
          <span>{transcript_words.slice((this.counter - 1) * NUM_CHARS).join(' ')}</span>
        </p>
        <div>
          <button onClick={resetTranscript}>Reset</button>
          <button onClick={listening ? stopListening : startListening}>{listening ? 'Stop' : 'Start'}</button>
          <p>Currently Listening: {listening ? 'Yes' : 'No'}</p>
        </div>
        <hr/>
      </div>
    )
  }
}

Text.propTypes = propTypes;

export default SpeechRecognition(Text)