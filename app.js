const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { sequelize } = require('./models/db');
const accountRoutes = require('./routes/account');
const destinationRoutes = require('./routes/destination');
const dataRoutes = require('./routes/dataHandler');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/accounts', accountRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/server', dataRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
});