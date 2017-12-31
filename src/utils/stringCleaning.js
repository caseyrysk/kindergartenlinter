export function replaceBadWords(inputText, badTokens, replacementTokens) {
    if (inputText === null) {
        return null;
    }

    let replaceMask = ['flower'];
    let searchMask = "butt|fart|burp";

    if (badTokens && badTokens !== null) {
        searchMask = badTokens.join('|');
    }

    if (replacementTokens && replacementTokens !== null) {
        replaceMask = replacementTokens; //[Math.floor(replacementTokens.length * Math.random())];
    }
    const regEx = new RegExp(searchMask, "ig");
    const result = inputText.split(' ').map(
        (x, index) =>
            x.replace(regEx, index < replaceMask.length ? replaceMask[index] : replaceMask[replaceMask.length - 1] )
    ).join(' ');

    return result;
}