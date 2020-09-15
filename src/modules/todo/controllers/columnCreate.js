import mongoose from 'mongoose';
import todoModel from '../todoModel';

export default async function columnCreate(req, res) {
  const _id = new mongoose.Types.ObjectId();

  const column = new todoModel({
    _id,
    name: req.body.name,
    tasks: req.body.tasks,
  });

  column
    .save()
    .then(() => {
      res.status(201).json(`Column with id:${_id} is created`);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}
