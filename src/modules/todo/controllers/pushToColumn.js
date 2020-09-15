import todoModel from '../todoModel';
import mongoose from 'mongoose';

const pushToColumn = (req, res) => {
  const column = req.body.column;
  console.log("COLUMN" ,column);
  const id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;
  const priority = req.body.priority;
  const shrink = req.body.shrink;
  const done = req.body.done;
  todoModel.update({ name: column }, {
    $push: {
      tasks: {
        $each: [{
          'id': id,
          'name': name,
          'description': description,
          'done': done,
          'shrink': shrink,
          'priority': priority,
        }],
      },
    },
  })

    .then(doc => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json('No todo for provided id');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

export default pushToColumn;