import axios from 'axios';
let https = require('https');
let querystring = require('querystring')

// **********************************************
// *** Update or verify the following values. ***
// **********************************************

// Replace the accessKey string value with your valid access key.
let accessKey = 'ea1b151321d9410aac82b52653f61c77';

// Replace or verify the region.

// You must use the same region in your REST API call as you used to obtain your access keys.
// For example, if you obtained your access keys from the westus region, replace 
// "westcentralus" in the URI below with "westus".

// NOTE: Free trial access keys are generated in the westcentralus region, so if you are using
// a free trial access key, you should not need to change this region.
let uri = 'https://api.cognitive.microsoft.com';
let bing_path = '/bing/v7.0/entities';

function get_definitions(text) {
    return axios.get(uri + bing_path, {
        params: {
            // Request parameters
            "q": text,
            "mkt": "en-us",
            "count": "1",
            "offset": "0",
            "safesearch": "Moderate",
        },
        headers: {
            'Ocp-Apim-Subscription-Key': accessKey
        }
    });
}

export {get_definitions};