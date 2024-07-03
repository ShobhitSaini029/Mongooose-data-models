import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    titel: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
      rewuired: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestaps: true }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
