const Doctor = require('../models/doctor');

const doctor_index = (req, res) => {
    const param = req.query.search.toString()
    Doctor.find({ name: new RegExp(param, 'i')})
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    });
}

const doctor_details = (req, res) => {
  const id = req.params.id;
  Doctor.findById(id)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
}

const doctor_create_post = (req, res) => {
    const doctor = new Doctor(req.body);
    doctor.save()
    .then(result => {
        res.send('Success');
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = {
  doctor_index, 
  doctor_details,
  doctor_create_post,
}