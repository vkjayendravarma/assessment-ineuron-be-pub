import mongoose from 'mongoose';

export const ToDoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  completed: { type: Boolean, default: false },
});

export interface ToDo {
  title: string;
  description: string;
  completed: boolean;
}
