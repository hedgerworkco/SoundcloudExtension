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

const trimTrackData = (tracks = [], favoritePos) => {
  return Array.isArray(tracks) ? tracks.map((track, index) => {
    const splitTitle = track.title.split(' - ');
    const mbUsername = splitTitle.length > 1 ? splitTitle[0] : track.user.username;
    const trackTitle = splitTitle.length > 1 ? splitTitle[1] : track.title;

    return {
      id: track.id,
      title: trackTitle,
      username: track.user.username,
      created_at: moment(track.created_at).format('MM/DD/YY, HH:MM'),
      stream_url: track.stream_url,
      uri: track.uri,
      favorite_index: favoritePos + index,
      mb_username: mbUsername,
      artwork_url: track.artwork_url,
      waveform_url: track.waveform_url
    }
  }) : [];
};

export const initLibrary = (opts) => {
  var options = Object.assign({}, vals, opts);
  return dispatch => {
    WebUtils.get(`${SOUNDCLOUD_API}/me`, options)
    .then(function(data) {
      dispatch(successGetMe(data.body));
      function getFavoritesRecursively(offset = 0) {
        var step = 200;
        var newOptions = {
          client_id: '',
          oauth_token: '',
          offset: offset,
          limit: 200
        };

        WebUtils.get(`${SOUNDCLOUD_API}/users/${data.body.id}/favorites`, newOptions)
        .then(function(favorites) {
          dispatch(successGetLikes(trimTrackData(favorites.body, offset)));
          if (data.body.public_favorites_count - 800 > offset + favorites.body.length) {
            getFavoritesRecursively(offset + favorites.body.length);
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

export default {
  getMe,
  getLikes,
  successGetLikes,
  initLibrary,
  playTrack
}