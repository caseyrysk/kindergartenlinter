export function replaceBadWords (inputText) {
    if (inputText === null) {
        return null;
    }

    const searchMask = "butt";
    const regEx = new RegExp(searchMask, "ig");
    const replaceMask = "flower";
    
    const result = inputText.replace(regEx, replaceMask);

    return result;
}
