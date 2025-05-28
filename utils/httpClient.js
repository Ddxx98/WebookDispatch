const axios = require('axios');

exports.send = async (method, url, data, headers) => {
  return axios({ method, url, data, headers });
};