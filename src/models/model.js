import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter your first name'
  },
  lastName : {
    type: String,
    required: 'Enter your last name'
  },
  email: {
    type: String,
    required: 'Enter your email'
  },
  phone: {
    type: Number
  },
  create_Date: {
    type: Date,
    default: Date.now()
  }

});
