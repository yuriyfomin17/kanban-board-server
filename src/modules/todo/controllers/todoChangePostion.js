import todoModel from '../todoModel';

const todoChangePosition = (req, res) => {
  const index = req.body.index;
  const column = req.body.column;
  const name = req.body.name;
  const description = req.body.description;
  const done = req.body.done;
  const shrink = req.body.shrink;
  const priority = req.body.priority;
  const id = req.body.id

  todoModel.update({ name:  column }, {
    $push: {
      tasks: {
        $each:[{
          'id': id,
          'name': name,
          'description': description,
          'done': done,
          'shrink': shrink,
          'priority': priority,
        }],
        $position: index,
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

export default todoChangePosition;