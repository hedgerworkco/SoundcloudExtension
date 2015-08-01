'use strict';

import request from 'superagent';

import { createAction } from 'redux-actions';
import ActionTypes from '../constants/ActionTypes';
import { SOUNDCLOUD_API } from '../constants/static';

const WebUtils = {
  fetchMe: function(opts) {
    return new Promise(function(resolve, reject) {
      request.get(`${SOUNDCLOUD_API}/me`)
             .query(opts)
             .end((err, res) => {
                if (!err) {
                  resolve({ me: res.body });
                } else {
                  reject(err);
                }
              });
      });
  }
}

export const BEGIN_FETCHING_ME = createAction(ActionTypes.BEGIN_FETCHING_ME);
export const SUCCESS_FETCHING_ME = createAction(ActionTypes.SUCCESS_FETCHING_ME);
export const ERROR_FETCHING_ME = createAction(ActionTypes.ERROR_FETCHING_ME);

// Action creator
export const beginFetchMe = (opts) => {
  return {
    promise: WebUtils.fetchMe(opts),
    types: [BEGIN_FETCHING_ME, SUCCESS_FETCHING_ME, ERROR_FETCHING_ME]
  }
};

export const successFetchMe = (responseBody) => {
  return {
    payload: responseBody,
    type: ActionTypes.SUCCESS_FETCHING_ME
  }
};