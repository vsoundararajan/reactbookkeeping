import { call } from 'redux-saga/effects';
import { v4 } from 'uuid';
import axios from 'axios';
import _ from 'lodash';
import * as config from './config';

const DEFAULT_HEADERS = {
  'Content-Type': config.CONTENT_TYPE,
};

export function* request(url, method, body) {

  const fullUrl = `${config.NEMO_URL}/${url}`;

  const headers = _.extend(
    {},
    { 'X-Request-Id': `customers-${v4()}` },
    DEFAULT_HEADERS
  );

  const options = {
    headers,
    withCredentials: true,
  };
  try {
    switch (method) {
      case 'get':
      case 'GET':
        return yield call(axios.get, fullUrl, options);
      case 'put':
      case 'PUT':
        return yield call(axios.put, fullUrl, body, options);
      case 'post':
      case 'POST':
        return yield call(axios.post, fullUrl, body, options);
      case 'DELETE':
      case 'delete':
        return yield call(axios.delete, fullUrl, options);
    }
  } catch (error) {
    return error.response;
  }
}


