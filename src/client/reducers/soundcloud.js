'use strict';

import Immutable from 'immutable';
import { handleAction } from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';

const initialState = {};

export default function fetchMe(state = {}, action) {
  console.log('here');
  switch (action.type) {
    case ActionTypes.SUCCESS_FETCHING_ME:
      return action.payload;

    default:
      return {a: 'you suck'};
  }
}