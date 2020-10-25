const express = require('express');
const mongoose = require('mongoose');
var db = require('node-mysql');
var DB = db.DB;
var BaseRow = db.Row;
var BaseTable = db.Table;
const doctorRoutes = require('./routes/doctorRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

const dbURI = "mongodb+srv://admin:DhuWcYhqRrRdueJP@testnodejs.uyqw9.mongodb.net/medigo?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

const app = express();
app.use(express.json());

//READ Request Handlers
app.get('/api', (req, res) => {
  res.send('Welcome to The Begining of Nothingness');
});

// DOCTOR ROUTES
app.use('/api/doctors', doctorRoutes);

// DOCTOR ROUTES
app.use('/api/hospitals', hospitalRoutes);

// DOCTOR ROUTES
app.use('/api/schedules', scheduleRoutes);

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));