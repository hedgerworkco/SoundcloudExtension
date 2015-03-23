'use strict';

import request from 'superagent';
import { createAction } from 'redux-actions';
import { ActionTypes } from '../constants/ActionTypes';
import { SOUNDCLOUD_API } from '../constants/static';

const fetchMe = opts =>
  request.get(`${SOUNDCLOUD_API}/me`)
    .query(opts)
    .end((err, res) => ({ me: res }));

const fetchLikes = opts =>
  request.get(`${SOUNDCLOUD_API}/me/likes`)
    .query(opts)
    .end((err, res) => ({ likes: res }));

const fetchTracks = opts =>
  request.get(`${SOUNDCLOUD_API}/tracks`)
    .query(opts)
    .end((err, res) => ({ tracks: res }));

const fetchUser = opts =>
  request.get(`${SOUNDCLOUD_API}/users`)
    .query(opts)
    .end((err, res) => ({ users: res }));

export default {
  fetchMe: createAction(ActionTypes.FETCH_ME, fetchMe),
  fetchLikes: createAction(ActionTypes.FETCH_LIKES, fetchLikes),
  fetchTracks: createAction(ActionTypes.FETCH_TRACKS, fetchTracks),
  fetchUser: createAction(ActionTypes.FETCH_USER, fetchUser),
}