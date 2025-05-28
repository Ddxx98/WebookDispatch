const Account = require('../models/Account');
const Destination = require('../models/Destination');
const httpClient = require('../utils/httpClient');

exports.handle = async (req, res) => {
  if (!req.is('application/json')) return res.status(400).json({ message: 'Invalid Data' });

  const token = req.headers['cl-x-token'];
  if (!token) return res.status(401).json({ message: 'Un Authenticated' });

  const account = await Account.findOne({ secretToken: token });
  if (!account) return res.status(404).json({ message: 'Account not found' });

  const destinations = await Destination.find({ accountId: account._id });

  try {
    await Promise.all(destinations.map(async (dest) => {
      console.log("Sending to destination:", dest);

      await httpClient.send(
        dest.method,
        dest.url,
        req.body,
        Object.fromEntries(dest.headers)
      );
    }));

    res.json({ message: 'Data sent to all destinations' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending data', error: err });
  }

};
