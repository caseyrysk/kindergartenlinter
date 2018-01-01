import {replaceBadWords} from './stringCleaning';

describe('String Cleaning', () => {
  describe('simple replace', () => {
    it('returns flower for butt', () => {
      return expect(replaceBadWords('simple butt', ['butt'], ['flower'])).resolves.toEqual('simple flower');
    });
  });

  // describe('simple replace', () => {
  //   it('returns flower for fart', async() => {
  //     expect(replaceBadWords('simple fart')).toEqual('simple flower');
  //   });
  // });

  // describe('plural word replace', () => {
  //   it('returns flower for farts', async () => {
  //     expect(replaceBadWords('simple farts')).toEqual('simple flowers');
  //   });
  // });

  // describe('plural word replace', () => {
  //   it('returns flower for stupid', async() => {
  //     expect(replaceBadWords('simple stupid', ['stupid', 'dumb'], ['flower', 'flower'])).toEqual('simple flower');
  //   });
  // });

  // describe('plural word replace', async() => {
  //   it('returns flower for stupid', () => {
  //     expect(replaceBadWords('simple stupid', ['stupid', 'dumb'], ['foobar'])).toEqual('simple foobar');
  //   });
  // });

  // describe('unique replace', () => {
  //   it('returns foo bar for dumb stupid', async() => {
  //     expect(replaceBadWords('dumb stupid', ['stupid', 'dumb'], ['foo', 'bar'])).toEqual('foo bar');
  //   });
  // });
});
