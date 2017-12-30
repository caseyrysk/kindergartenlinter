import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dates';

// example of a thunk using the redux-thunk middleware
export function saveStoryText(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SAVE_STORY,
      dateModified: getFormattedDateTime(),
      settings
    });
  };
}

