const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
  doctor: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  workSchedule: {
    type: {
        days:Number,
        startHour:Number,
        endHour:Number
    },
    required: true
  },
  onlineAppointment:{
      type: Boolean,
      required: true
  }
}, { timestamps: true });

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;