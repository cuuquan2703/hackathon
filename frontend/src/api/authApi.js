import { apiV1, get, patch, post } from "./base";

const authApi = {
  getInfo: function (token) {
    const url = `${apiV1}/auth/me`;
    return get(url, token);
  },
  isAdmin: function (token) {
    const url = `${apiV1}/auth/me`;
    return get(url, token);
  },
  patchUser: function (data, token) {
    const url = `${apiV1}/auth/updateMe`;
    return patch(url, data, token);
  },
  checkLogin: function (token) {
    const url = `${apiV1}/auth/checkLogin`;
    return get(url, token);
  },
  Login: function (data, token) {
    const url = `${apiV1}/auth/login`;
    return post(url, data, token);
  },
  Register: function (data, token) {
    const url = `${apiV1}/auth/register}`;
    return post(url, data, token);
  },
};
export default authApi;
