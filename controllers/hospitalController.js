const Hospital = require('../models/hospital');

const hospital_index = (req, res) => {
    const param = req.query.search.toString()
    Hospital.find({ name: new RegExp(param, 'i')})
    .then(result => {
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    });
}

const hospital_details = (req, res) => {
  const id = req.params.id;
  Hospital.findById(id)
    .then(result => {
        res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
}

const hospital_create_post = (req, res) => {
    const hospital = new Hospital(req.body);
    hospital.save()
    .then(result => {
        res.send('Success');
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = {
  hospital_index, 
  hospital_details,
  hospital_create_post,
}