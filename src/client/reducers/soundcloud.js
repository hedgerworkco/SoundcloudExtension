'use strict';

import Immutable from 'immutable';
import { handleAction } from 'redux-actions';
import { SUCCESS_GET_ME, ERROR_GET_ME, SUCCESS_GET_LIKES, ERROR_GET_LIKES, PLAY_TRACK } from '../constants/ActionTypes';

const initialState = {
  tracks: []
}

export function soundcloud(state = initialState, action) {
  switch (action.type) {
    case SUCCESS_GET_ME:
      return {
        ...state,
        me: action.payload
      };

    case SUCCESS_GET_LIKES:
      return {
        ...state,
        tracks: state.tracks.concat(action.payload)
      };

    default:
      return state;
  }
}

export function playTrack(state = '', action) {
  switch (action.type) {
    case PLAY_TRACK:
      return action.payload

    default:
      return ''
  }
}