import $ from "jquery";

export function persistBadTokens(badTokens) {
    const jsondata = { config: { badTokens: badTokens } };
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

    return $.ajax(settings);
}