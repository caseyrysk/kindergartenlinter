import * as types from '../constants/actionTypes';
import { persistBadTokens } from '../api/saveTokenApi';

// example of a thunk using the redux-thunk middleware
export function saveStoryText(storyTextRaw) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SAVE_STORY,
      storyTextRaw: storyTextRaw
    });
  };
}

export function saveBadTokens(badTokens) {
  const tokens = badTokens.split(',').map(item => item.trim());
  return function (dispatch) {
    return persistBadTokens(tokens)
      .then(() => {
        return dispatch({
          type: types.SAVE_BADTOKENS,
          badTokens: tokens
        });
      });
  };
}