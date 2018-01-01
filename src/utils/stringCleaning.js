import { getAntonym } from '../api/wordApi';

export async function replaceBadWords(inputText, badTokens, replacementTokens) {
    if (inputText === null) {
        return null;
    }

    let replaceMask = ['flower'];
    let searchMask = "butt|fart|burp";
    let result = "";

    if (badTokens && badTokens !== null) {
        searchMask = badTokens.join('|');
    }

    if (replacementTokens && replacementTokens !== null) {
        replaceMask = replacementTokens;
    }
    const regEx = new RegExp(searchMask, "ig");
    const getAntonymPromises = inputText.split(' ').map(
        async (word, index) => {
            const fallbackWord = index < replaceMask.length ? replaceMask[index] : replaceMask[replaceMask.length - 1];
                // console.log("getAntonymPromises::" + fallbackWord); // eslint-disable-line
                return await getAntonym(word, fallbackWord).then(replacement => {
                //     console.log("replaceBadWords::" + x); // eslint-disable-line
                //     return x;
                // });
                // console.log("replaceBadWords::" + replacement); // eslint-disable-line

                return word.replace(regEx, replacement);
            });
        }
    ); // .join(' ');
    // Wait for all Promises to complete

    // console.log("getAntonymPromises::" + getAntonymPromises); // eslint-disable-line
    await Promise.all(getAntonymPromises)
        .then(results => {
            // console.log("wtf:results::" + results); // eslint-disable-line
            result = results.join(' ');
        })
        .catch(e => {
            console.error(e); // eslint-disable-line
        });
    // result = getAntonymPromises;

    return result;
}