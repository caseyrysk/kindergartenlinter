import { SAVE_STORY, SAVE_BADTOKENS } from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';
import 'babel-polyfill';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function storySavingsReducer(state = initialState.storySaving, action) {
  switch (action.type) {
    case SAVE_BADTOKENS:
      return objectAssign({}, state, { badTokens: action.badTokens });

    case SAVE_STORY:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      // console.debug("SAVE_STORY storySavingsReducer::" + action.storyTextRaw);  // eslint-disable-line

      return objectAssign({}, state, { storyRawText: action.storyTextRaw, storyClean: action.storyTextRaw}); // replaceBadWords(action.storyTextRaw, state.badTokens, state.replacementTokens) }

    default:
      return state;
  }
}
