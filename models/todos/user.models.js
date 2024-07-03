import mongoose from 'mongoose';

// To create a schema, with best practices...
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      // required: [true, 'Password is required.'],
    },
    // isActive: Boolean,
  },
  { timestamps: true }
);

// Exporting the mongoose, User is instance of it we can use it furthure.
export const User = mongoose.model('User', userSchema);
