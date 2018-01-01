import {replaceBadWords} from './stringCleaning';

describe('String Cleaning', () => {
  describe('simple replace', () => {
    it('returns flower for butt', () => {
      return expect(replaceBadWords('simple butt', ['butt'], ['flower'])).resolves.toEqual('simple flower');
    });
  });

  describe('simple replace', () => {
    it('returns flower for fart', async() => {
      return expect(replaceBadWords('simple fart', ['fart'], ['flower'])).resolves.toEqual('simple flower');
    });
  });

  describe('plural word replace', () => {
    it('returns flower for farts', async () => {
      return expect(replaceBadWords('simple farts', ['fart'], ['flower'])).resolves.toEqual('simple flowers');
    });
  });

  describe('plural word replace', () => {
    it('returns smart for stupid', async() => {
      return expect(replaceBadWords('simple stupid', ['stupid', 'dumb'], ['flower', 'flower'])).resolves.toEqual('simple smart');
    });
  });

  describe('unique replace', () => {
    it('returns foo bar for dumb stupid', async() => {
      return expect(replaceBadWords('dumb stupid', ['stupid', 'dumb'], ['foo', 'bar'])).resolves.toEqual('foo smart');
    });
  });
});
