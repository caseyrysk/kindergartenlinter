import fetch from 'isomorphic-fetch';

export async function getAntonym(sourceToken) {
    const srcUrl = "https://api.datamuse.com/words?rel_ant=";

    // let result = null;

    return fetch(srcUrl + sourceToken)
        .then(response => { return response.json(); })
        .then(data => {
            return data[0].word;
        });
}