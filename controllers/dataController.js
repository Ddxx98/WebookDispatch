const { Account, Destination } = require('../models/db');
const httpClient = require('../utils/httpClient');

exports.handleIncomingData = async (req, res) => {
  if (req.method === 'GET') return res.status(400).json({ message: 'Invalid Data' });
  if (!req.is('application/json')) return res.status(400).json({ message: 'Invalid Data' });

  const token = req.headers['cl-x-token'];
  if (!token) return res.status(401).json({ message: 'Un Authenticate' });

  const account = await Account.findOne({ where: { secretToken: token } });
  if (!account) return res.status(401).json({ message: 'Un Authenticate' });

  const destinations = await Destination.findAll({ where: { accountId: account.id } });

  try {
    await Promise.all(destinations.map(dest => {
      if (dest.method.toLowerCase() === 'get') {
        return httpClient.send(dest.method, dest.url, req.body, dest.headers);
      }
      return httpClient.send(dest.method, dest.url, req.body, dest.headers);
    }));
    res.json({ message: 'Data sent to all destinations' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending data', error: err.message });
  }
};