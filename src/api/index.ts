/*
 * @Author: Marshall
 * @Date: 2023-12-09 16:52:15
 * @LastEditors: Marshall
 * @LastEditTime: 2023-12-09 19:19:03
 * @Description:
 * @FilePath: /wuxian-rn-template/src/api/index.ts
 */
import Request from '../utils/request';

export const test = () => {
  return Request.get('/posts/1');
};
