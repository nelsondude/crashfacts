import React from 'react';

let https = require('https');

// **********************************************
// *** Update or verify the following values. ***
// **********************************************

// Replace the accessKey string value with your valid access key.
let accessKey = '08de415aa43f4f80a0de862a665bdd63';

// Replace or verify the region.

// You must use the same region in your REST API call as you used to obtain your access keys.
// For example, if you obtained your access keys from the westus region, replace 
// "westcentralus" in the URI below with "westus".

// NOTE: Free trial access keys are generated in the westcentralus region, so if you are using
// a free trial access key, you should not need to change this region.
let uri = 'eastus.api.cognitive.microsoft.com';
let keyPhrases_path = '/text/analytics/v2.0/keyPhrases';
let entities_path = '/text/analytics/v2.1-preview/entities';

function setup_document(text) {
  let documents = {
    'documents': [
      { 'id': '1', 'language': 'en', 'text': text },
    ]
  };

  return documents;
}

function get_keyPhrases(text, callback) {
  let body = JSON.stringify(setup_document(text));

  let request_params = {
    method: 'POST',
    hostname: uri,
    path: keyPhrases_path,
    headers: {
      'Ocp-Apim-Subscription-Key': accessKey,
    }
  };

  let req = https.request(request_params, response => {
    let body = '';
    response.on('data', function (d) {
      body += d;
    });
    response.on('end', function () {
      let body_ = JSON.parse(body);
      //let body__ = JSON.stringify(body_, null, '  ');
      console.log(body_);
      callback(body_.documents[0]);
    });
    response.on('error', function (e) {
      console.log('Error: ' + e.message);
    });
  });
  req.write(body);
  req.end();
}

function get_entities(text, callback) {
  console.log("sending ");
  console.log(text);
  let body = JSON.stringify(setup_document(text));

  let request_params = {
    method: 'POST',
    hostname: uri,
    path: entities_path,
    headers: {
      'Ocp-Apim-Subscription-Key': accessKey,
    }
  };

  let req = https.request(request_params, response => {
    let body = '';
    response.on('data', function (d) {
      body += d;
    });
    response.on('end', function () {
      let body_ = JSON.parse(body);
      //let body__ = JSON.stringify(body_, null, '  ');
      callback(body_.documents[0]);
    });
    response.on('error', function (e) {
      console.log('Error: ' + e.message);
    });
  });
  req.write(body);
  req.end();
}

class Phrase extends React.Component {
  state = {
    words: this.props.words
  };

  replaceWithEntities = (entities_list) => {
    console.log('entities list: ', entities_list.entities);
    let word_string = this.state.words.slice();
    entities_list.entities.forEach((entity, i) => {
      word_string = word_string.replace(entity.name, `<span><strong>`+entity.name+`</strong></span>`)
    });
    this.setState({words: word_string + '&nbsp;'});
    this.props.keywordsChanged(entities_list.entities)
  };



  componentDidMount () {
    //this.props.words is a string
    get_entities(this.props.words, this.replaceWithEntities);
  }

  render() {
    return (
      <span dangerouslySetInnerHTML={{__html: this.state.words.slice()}} style={{wordWrap: 'break-word'}}/>
    )
  }
}

export { get_keyPhrases, get_entities };
export default Phrase;