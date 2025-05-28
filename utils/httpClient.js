const axios = require('axios');

async function send(method, url, data, headers) {
  method = method.toLowerCase();
  const config = { method, url, headers };
  if (method === 'get') config.params = data;
  else config.data = data;
  return axios(config);
}

module.exports = { send };
