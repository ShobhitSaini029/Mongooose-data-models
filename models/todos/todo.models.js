import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: true,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // It is the type of User
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // It is the array of type SubTodo.
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);

// Saved into DB with the name "todos"
