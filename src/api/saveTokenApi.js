import $ from "jquery";

export function persistBadTokens(badTokens) {
    const jsondata = { badTokens: badTokens };
    // const settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "https://story-8268.restdb.io/rest/storysettings",
    //   "method": "POST",
    //   "headers": {
    //     "content-type": "application/json",
    //     "x-apikey": "",
    //     "cache-control": "no-cache"
    //   },
    //   "processData": false,
    //   "data": {badTokens: JSON.stringify(badTokens)}
    // };

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://story-8268.restdb.io/rest/storysettings",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": "5a484585a7cfcd38149101d0",
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
    };


    // return fetch(settings.url, settings);
    // var myHeaders = new Headers();

    // var myInit = { method: 'GET',
    //                headers: myHeaders,
    //                mode: 'cors',
    //    cache: 'default' };

    // fetch('flowers.jpg', myInit).then(function(response) {
    //   return response.blob();
    // }).then(function(myBlob) {
    //   var objectURL = URL.createObjectURL(myBlob);
    //   myImage.src = objectURL;
    // });

    return $.ajax(settings);
}