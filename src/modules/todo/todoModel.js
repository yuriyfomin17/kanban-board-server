import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    tasks: {
      type: Array,
      required: true,
      default: '',
    },
  },
  { timestamps: {} },
);

export default mongoose.model('Todo', todoSchema);
