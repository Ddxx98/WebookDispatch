const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const accountRoutes = require('./routes/account');
const destinationRoutes = require('./routes/destination');
const dataHandlerRoutes = require('./routes/dataHandler');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 3000;
const MONGO_URI = "mongodb+srv://deexith2016:deexith2025@cluster0.5annhaj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URI).then(result => {
    console.log("Connected to MongoDB")
}).catch(err => {
    console.log(err);
})

app.use('/api/accounts', accountRoutes);
app.use('/api/destinations', destinationRoutes);
app.use('/server/incoming_data', dataHandlerRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});