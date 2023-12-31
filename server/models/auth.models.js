const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
    enum: ["Northeast","Southwest", "Mainland" ]
  },
  role:{
    type:String,
    enum:["student", "non-student", "admin"],
    required: true
  },  
  isAdmin: {
    type: Boolean,
  },
});

module.exports = mongoose.model('user', UserSchema);