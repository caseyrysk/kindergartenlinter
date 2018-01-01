import { replaceBadWords } from './stringCleaning';

const stupidAntonyms = '[{ "word": "smart", "score": 4279 }, { "word": "intelligent", "score": 1506 }]';

describe('String Cleaning', () => {
  describe('simple replace', () => {
    it('returns flower for butt', () => {
      fetch.mockResponse('[]');      
      // global.fetch = jest.fn().mockImplementation(() =>
      //   Promise.resolve(mockResponse(
      //     200, null, '{ "word": "smart", "score": 4279 }, { "word": "intelligent", "score": 1506 }'
      //   )));
      expect(replaceBadWords('simple butt', ['butt'], ['flower'])).resolves.toEqual('simple flower');
      expect(fetch).toHaveBeenCalledTimes(2);
    });
  });

  describe('simple replace', () => {
    it('returns flower for fart', async () => {
      fetch.mockResponse('[]');
      return expect(replaceBadWords('simple fart', ['fart'], ['flower'])).resolves.toEqual('simple flower');
    });
  });

  describe('plural word replace', () => {
    it('returns flower for farts', async () => {
      fetch.mockResponse('[]');
      return expect(replaceBadWords('simple farts', ['fart'], ['flower'])).resolves.toEqual('simple flowers');
    });
  });

  describe('plural word replace', () => {
    it('returns smart for stupid', async () => {
      fetch.mockResponse(stupidAntonyms);
      return expect(replaceBadWords('simple stupid', ['stupid', 'dumb'], ['flower', 'flower'])).resolves.toEqual('simple smart');
    });
  });

  describe('unique replace', () => {
    it('returns foo bar for dumb stupid', async () => {
      fetch.mockResponse(stupidAntonyms);
      return expect(replaceBadWords('dumb stupid', ['stupid', 'dumb'], ['foo', 'bar'])).resolves.toEqual('smart smart');
    });
  });

});
