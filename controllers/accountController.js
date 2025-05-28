const Account = require('../models/Account');
const Destination = require('../models/Destination');

exports.getAll = async (req, res) => {
  const accounts = await Account.find();
  res.json(accounts);
};

exports.create = async (req, res) => {
  try {
    const { email, name, website } = req.body;
    if (!email || !name) return res.status(400).json({ error: 'Email and name are required' });
    const account = new Account({ email, name, website });
    await account.save();
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const account = await Account.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!account) return res.status(404).json({ error: 'Account not found' });
  res.json(account);
};

exports.deleteAccount = async (req, res) => {
  const account = await Account.findByIdAndDelete(req.params.id);
  if (!account) return res.status(404).json({ error: 'Account not found' });

  await Destination.deleteMany({ accountId: account._id });
  res.json({ message: 'Account and associated destinations deleted' });
};
