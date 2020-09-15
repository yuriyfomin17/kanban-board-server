import todoModel from '../todoModel';

const todoDeleteById = (req, res) => {
  const column = req.body.column;
  const id = req.body.id
  console.log(id);
  console.log(column);
  todoModel.update({ name: column }, { $pull: {'tasks':{id:id} }})
    .exec()
    .then(doc => {
      if (doc.n) {
        res.status(200).json('Todo deleted');
      } else {
        res.status(400).json('Todo not found');
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

export default todoDeleteById;
