const { Account } = require('../models/db');

exports.createAccount = async (req, res) => {
  try {
    const { email, name, website } = req.body;
    const account = await Account.create({ email, name, website });
    res.status(201).json(account);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllAccounts = async (req, res) => {
  const accounts = await Account.findAll();
  res.json(accounts);
};

exports.getAccountById = async (req, res) => {
  const account = await Account.findByPk(req.params.id);
  if (!account) return res.status(404).json({ error: 'Account not found' });
  res.json(account);
};

exports.updateAccount = async (req, res) => {
  const account = await Account.findByPk(req.params.id);
  if (!account) return res.status(404).json({ error: 'Account not found' });
  await account.update(req.body);
  res.json(account);
};

exports.deleteAccount = async (req, res) => {
  const account = await Account.findByPk(req.params.id);
  if (!account) return res.status(404).json({ error: 'Account not found' });
  await account.destroy();
  res.json({ message: 'Account and its destinations deleted' });
};