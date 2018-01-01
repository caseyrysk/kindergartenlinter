import 'whatwg-fetch';

export function getAntonym(sourceToken, replaceNoMatch) {
    const srcUrl = "https://api.datamuse.com/words?rel_ant=";

    // let result = null;

    return fetch(srcUrl + sourceToken)
        .then(response => { return response.json(); })
        .then(data => {
            if (data !== null && data.length > 0) {
                return data[0].word;
            }

            return replaceNoMatch;
        });
}