import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 15,
    minlength: 3,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 15,
    minlength: 3,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
    minlength: 3
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  password: {
    type: String,
    required: true,
    maxlength: 1024,
    minlength: 8,
  },
  age: {
    type: Number,
    min: 18,
    max: 120
  },
  phoneNumber: {
    type: String,
    unique: true,
    validate: {
      validator: (v) => {
        return /^\d{10}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    }
  }
})

userSchema.statics.encryptPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}
userSchema.statics.comparePassword = async function (password, encryptedPassword) {
  return await bcrypt.compare(password, encryptedPassword);
}