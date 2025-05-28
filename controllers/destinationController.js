const { Destination, Account } = require('../models/db');

exports.createDestination = async (req, res) => {
  try {
    const { accountId, url, method, headers } = req.body;
    const account = await Account.findByPk(accountId);
    if (!account) return res.status(404).json({ error: 'Account not found' });
    const dest = await Destination.create({ accountId, url, method, headers });
    res.status(201).json(dest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllDestinations = async (req, res) => {
  const dests = await Destination.findAll();
  res.json(dests);
};

exports.getDestinationById = async (req, res) => {
  const dest = await Destination.findByPk(req.params.id);
  if (!dest) return res.status(404).json({ error: 'Destination not found' });
  res.json(dest);
};

exports.updateDestination = async (req, res) => {
  const dest = await Destination.findByPk(req.params.id);
  if (!dest) return res.status(404).json({ error: 'Destination not found' });
  await dest.update(req.body);
  res.json(dest);
};

exports.deleteDestination = async (req, res) => {
  const dest = await Destination.findByPk(req.params.id);
  if (!dest) return res.status(404).json({ error: 'Destination not found' });
  await dest.destroy();
  res.json({ message: 'Destination deleted' });
};

exports.getDestinationsByAccount = async (req, res) => {
  const accountId = req.params.id;
  const destinations = await Destination.findAll({ where: { accountId } });
  res.json(destinations);
};