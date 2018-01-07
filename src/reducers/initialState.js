export default {
  fuelSavings: {
    newMpg: '',
    tradeMpg: '',
    newPpg: '',
    tradePpg: '',
    milesDriven: '',
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculateSavings: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  },
  storySaving: {
    storyRawText: '',
    storyClean: '',
    badTokens: ['dumb', 'idiot', 'poop', 'stupid', 'butt', 'pee', 'dolt', 'cretin', 'poopy', 'poopy head', 'pee-pee', 'butt', 'fart'],
    replacementTokens: ['flower', 'dog', 'carrot', 'brocolli', 'garlic']
  }
};
