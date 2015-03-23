'use strict';

import Immutable from 'immutable';
import { handleAction } from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';

const fetchMe = handleAction(ActionTypes.FETCH_ME, {
  next(state = {}, action) {},
  throw(state, action) {}
});

export default fetchMe;