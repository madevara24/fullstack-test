const express = require('express');
const mongoose = require('mongoose');
// const blogRoutes = require('./routes/blogRoutes');

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

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));