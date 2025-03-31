import userSchema from '../models/userSchema.js';
import mongoose from 'mongoose';

export class UserController {
  constructor(userService) {
    this.userService = userService;
  }
  async createUser({ firstName, lastName, username, email, password, age, phoneNumber }) {
    try {
      const newUser = new userSchema({
        firstName,
        lastName,
        username,
        email,
        password: await userSchema.encryptPassword(password),
        age,
        phoneNumber
      });
      // Check if the username already exists in the database
      const existingUser = await getUserByUsername(username);
      if (existingUser) {
        return { message: 'Username already exists' };
      }
      const savedUser = await newUser.save();

      return savedUser;
    } catch (error) {
      return res.status(400).json({ message: 'Bad request' });
    }
  }

  
  async updateUser({ id, newUserInfo }) {
    try {
      const userInfo = mongoose.model(this.userService);
      const foundUser = await userInfo.findById(id);
      if (!foundUser) {
        return { message: 'User not found' };
      }
      const updatedUser = await userInfo.updateOne(
        { _id: id },
        {
          $set: {
            firstName: newUserInfo.firstName || foundUser.firstName,
            lastName: newUserInfo.lastName || foundUser.lastName,
            username: newUserInfo.username || foundUser.username,
            email: newUserInfo.email || foundUser.email,
            password: newUserInfo.password || foundUser.password,
            age: newUserInfo.age || foundUser.age,
            phoneNumber: newUserInfo.phoneNumber || foundUser.phoneNumber
          }
        }
      );
      return updatedUser;
    } catch (error) {
      return { message: 'Error updating user' };
    }
  }
  async deleteUser({ id }) {
    try {
      const userToDelete = mongoose.model(this.userService);
      const deletedUser = await userToDelete.findByIdAndDelete(id);
      if (!deletedUser) {
        return { message: 'User not found' };
      }
      return deletedUser;
    } catch (error) {
      return { message: 'Error deleting user' };
    }
  }
  async getUserByUsername({ username }) {
    try {
      const model = mongoose.model(this.userService);
      const validatedUser = await model.find({ username });
      if (!validatedUser || validatedUser.length === 0) {
        return { message: 'User not found' };
      }
      return validatedUser;
    } catch (error) {
      return error.message;
    }
  }
  async getUserbyEmail({ email }) {
    try {
      const model = mongoose.model(this.userService)

      const validatedUser = model.findOne({ email });
      if (!validatedUser) {
        return { message: 'User not found' };
      }
      return validatedUser;
    } catch (error) {
      return error.message;
    }
  }
  async getAllUsers() {
    try {
      const users = mongoose.model(this.userService);
      const allUsers = await users.find({});
      return allUsers;
    } catch (error) {
      return { message: 'Error retrieving users' };
    }
  }
}