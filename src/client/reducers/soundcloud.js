'use strict';

import Immutable from 'immutable';
import { handleAction } from 'redux-actions';
import { SUCCESS_GET_ME, ERROR_GET_ME, SUCCESS_GET_LIKES, ERROR_GET_LIKES, PLAY_TRACK } from '../constants/ActionTypes';

export function fetchMe(state = {}, action) {
  switch (action.type) {
    case SUCCESS_GET_ME:
      return action.payload;

    default:
      return state;
  }
};

export function fetchLikes(state = [], action) {
  switch (action.type) {
    case SUCCESS_GET_LIKES:
      return state.concat(action.payload);

    default:
      return state;
  }
};

export function playTrack(state = '', action) {
  switch (action.type) {
    case PLAY_TRACK:
      return action.payload

    default:
      return ''
  }
}