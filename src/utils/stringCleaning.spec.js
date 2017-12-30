import {replaceBadWords} from './stringCleaning';

describe('String Cleaning', () => {
  describe('simple replace', () => {
    it('returns flower for butt', () => {
      expect(replaceBadWords('simple butt')).toEqual('simple flower');
    });
  });

  describe('simple replace', () => {
    it('returns flower for fart', () => {
      expect(replaceBadWords('simple fart')).toEqual('simple flower');
    });
  });

  describe('plural word replace', () => {
    it('returns flower for farts', () => {
      expect(replaceBadWords('simple farts')).toEqual('simple flowers');
    });
  });
});
