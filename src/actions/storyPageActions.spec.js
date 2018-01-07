import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './storyPageActions';

describe('StoryPage Actions', () => {
  beforeAll(() => {
   
  });
  
  const rawText = 'stupid boy';
  const expectedCleanText = 'smart boy';

  it('should clean the string', async () => {
    fetch.mockResponse('[]');      

    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.SAVE_STORY,
      storyTextRaw: expectedCleanText
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.saveStoryText(rawText, ['stupid'], ['smart']))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    // since this has async function in it, must await it
    await ActionCreators.saveStoryText(rawText, ['stupid'], ['smart'])(dispatch);
    expect(dispatch).toBeCalledWith(expected);
  });
});
