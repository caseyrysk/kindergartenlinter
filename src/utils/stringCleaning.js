import { getAntonym } from '../api/wordApi';

export async function replaceBadWords(inputText, badTokens, replacementTokens) {
    // console.log("replaceBadWords::" + inputText + "::" + badTokens); // eslint-disable-line

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
            return await getAntonym(word, fallbackWord).then(replacement => {
                return word.replace(regEx, replacement);
            });
        }
    );

    await Promise.all(getAntonymPromises)
        .then(results => {
            result = results.join(' ');
        });
    // console.log("replaceBadWords::end::" + result); // eslint-disable-line

    return result;
}