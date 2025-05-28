const Destination = require('../models/Destination');

exports.getAll = async (req, res) => {
  const dests = await Destination.find().populate('accountId');
  res.json(dests);
};

exports.getByAccount = async (req, res) => {
  const dests = await Destination.find({ accountId: req.params.accountId });
  res.json(dests);
};

exports.create = async (req, res) => {
  const { accountId, url, method, headers } = req.body;
  if (!url || !method || !headers) return res.status(400).json({ error: 'Missing required fields' });

  const destination = new Destination({ accountId, url, method: method.toUpperCase(), headers });
  await destination.save();
  res.status(201).json(destination);
};

exports.update = async (req, res) => {
  const updated = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: 'Destination not found' });
  res.json(updated);
};

exports.delete = async (req, res) => {
  await Destination.findByIdAndDelete(req.params.id);
  res.json({ message: 'Destination deleted' });
};
