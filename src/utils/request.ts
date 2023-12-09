/*
 * @Author: Marshall
 * @Date: 2023-12-09 16:32:06
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-09 17:06:45
 * @Description:
 * @FilePath: /wuxian-rn-template/src/utils/request.ts
 */
import axios from 'axios';
import qs from 'querystring';

const service = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

service.interceptors.request.use(config => {
  if (config.method === 'get') {
    config.params = {
      ...config.data,
      _t: new Date().getTime() / 1000,
    };
  }
  return config;
});

service.interceptors.response.use(response => {
  if (response.status === 200) {
    return response.data.data || response.data || response;
  } else {
    throw Error(response.data.message || '服务异常');
  }
});

interface RequestParams {
  [key: string]: any;
}

export default class Request {
  static async getWithHeader(url: string, params: RequestParams = {}) {
    try {
      let query = await qs.stringify(params);
      let res = null;
      if (!params) {
        res = await service.get(url);
      } else {
        res = await service.get(url + '?' + query);
      }
      return res;
    } catch (error) {
      return error;
    }
  }

  static async get(url: string, params: RequestParams = {}) {
    try {
      let query = await qs.stringify(params);
      let res = null;
      if (!params) {
        res = await service.get(url);
      } else {
        res = await service.get(url + '?' + query);
      }
      return res;
    } catch (error) {
      return error;
    }
  }

  static async post(url: string, params: RequestParams = {}) {
    try {
      return await service.post(url, params);
    } catch (error) {
      return error;
    }
  }

  static async patch(url: string, params: RequestParams = {}) {
    try {
      return await service.patch(url, params);
    } catch (error) {
      return error;
    }
  }

  static async put(url: string, params: RequestParams = {}) {
    try {
      return await service.put(url, params);
    } catch (error) {
      return error;
    }
  }

  static async delete(url: string, params: RequestParams = {}) {
    try {
      return await service.post(url, params);
    } catch (error) {
      return error;
    }
  }
}
