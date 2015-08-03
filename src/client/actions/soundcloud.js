'use strict';

import request from 'superagent';
import moment from 'moment';

import { createAction } from 'redux-actions';
import {
  BEGIN_GET_ME,
  SUCCESS_GET_ME,
  ERROR_GET_ME,
  BEGIN_GET_LIKES,
  SUCCESS_GET_LIKES,
  ERROR_GET_LIKES,
  PLAY_TRACK
} from '../constants/ActionTypes';

import { SOUNDCLOUD_API } from '../constants/static';

const vals = {
  client_id: '',
  oauth_token: '',
  format: 'json'
};

const WebUtils = {
  get: (url, opts, handler) => {
    return new Promise((resolve, reject) => {
      request.get(url)
        .set('Content-Type', 'application/json')
        .query(opts)
        .end(function(error, res) {
          if (!error) {
            resolve(res);
          } else {
            reject(error);
          }
        });
    });
  },

  post: function(url, opts, handler) {
    return null;
  }

}




// Action creator
export const getMe = (opts) => {
  // var options = Object.assign({}, vals, opts);
  return {
    promise: WebUtils.get(`${SOUNDCLOUD_API}/me`, opts),
    types: [
      BEGIN_GET_ME,
      SUCCESS_GET_ME,
      ERROR_GET_ME
    ]
  }
};

export const successGetMe = (responseBody) => {
  return {
    payload: responseBody,
    type: SUCCESS_GET_ME
  }
};

export const getLikes = (opts) => {
  return {
    promise: WebUtils.get(`${SOUNDCLOUD_API}/me`, opts),
    types: [
      BEGIN_GET_LIKES,
      SUCCESS_GET_LIKES,
      ERROR_GET_LIKES
    ]
  }
};

export const successGetLikes = (responseBody) => {
  return {
    payload: responseBody,
    type: SUCCESS_GET_LIKES
  }
};

function trimTrackData(tracks) {
  return tracks.map(track => {
    return {
      id: track.id,
      title: track.title,
      username: track.user.username,
      created_at: moment(track.created_at).format('MM/DD/YY, HH:MM'),
      stream_url: track.stream_url,
      uri: track.uri
    }
  });
}

export const initLibrary = (opts) => {
  var options = Object.assign({}, vals, opts);
  return dispatch => {
    WebUtils.get(`${SOUNDCLOUD_API}/me`, options)
    .then(function(data) {
      function getFavoritesRecursively(offset = 0) {
        var step = 200;
        var newOptions = {
          client_id: '',
          oauth_token: '',
          offset: offset,
          limit: 50
        };

        WebUtils.get(`${SOUNDCLOUD_API}/users/${data.body.id}/favorites`, newOptions)
        .then(function(favorites) {
          dispatch(successGetLikes(trimTrackData(favorites.body)));
          if (data.body.public_favorites_count > offset + favorites.body.length) {
            // getFavoritesRecursively(offset + favorites.body.length);
          }
        });
      }

      getFavoritesRecursively(0);
    });
  };
};

export const playTrack = (streamUrl) => {
  return {
    payload: streamUrl,
    type: PLAY_TRACK
  }
}

