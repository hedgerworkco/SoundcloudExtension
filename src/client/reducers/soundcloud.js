'use strict';

import Immutable from 'immutable';
import { handleAction } from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';

const fetchMe = handleAction(ActionTypes.SUCCESS_FETCHING_ME, {
  next(state = {}, action) {
    console.log('next');
  },
  throw(state, action) {
    console.log('throw');
  }
});

export default fetchMe;
