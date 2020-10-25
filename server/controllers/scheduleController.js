const Schedule = require('../models/schedule');

const schedule_index = (req, res) => {
    const param = req.query.search.toString()
    Schedule.find({ doctor: new RegExp(param, 'i')})
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    });
}

const schedule_details = (req, res) => {
  const id = req.params.id;
  Schedule.findById(id)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
}

const schedule_create_post = (req, res) => {
    const schedule = new Schedule(req.body);
    schedule.save()
    .then(result => {
        res.send('Success');
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = {
  schedule_index, 
  schedule_details,
  schedule_create_post,
}