const express = require('express');
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctorRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');

const dbURI = "mongodb+srv://admin:DhuWcYhqRrRdueJP@testnodejs.uyqw9.mongodb.net/medigo?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));