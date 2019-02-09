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
let uri = 'api.cognitive.microsoft.com';
let bing_path = '/bing/v7.0/entities';

function setup_parameters(text) {
    var params = {
        // Request parameters
        "q": text,
        "mkt": "en-us",
        "count": "1",
        "offset": "0",
        "safesearch": "Moderate",
    };
    return params;
}

function get_definitions(text, callback) {
    let param_path = bing_path + "?" + querystring.stringify(setup_parameters(text));

    let request_params = {
        method: 'GET',
        hostname: uri,
        path: param_path,
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
            callback(body_);
        });
        response.on('error', function (e) {
            console.log('Error: ' + e.message);
        });
    });
    //req.write(body);
    req.end();
}

export {get_definitions};