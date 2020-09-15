import { Router } from 'express';

import todoGetAll from './controllers/todoGetAll';
import todoGetById from './controllers/todoGetById';
import todoUpdateById from './controllers/todoUpdateById';
import columnCreate from './controllers/columnCreate';
import todoDeleteById from './controllers/todoDeleteById';
import todoChangePosition from './controllers/todoChangePostion';
import pushToColumn from './controllers/pushToColumn';

const router = Router();

router.get('/', todoGetAll);
router.post('/', columnCreate);
router.post('/push', pushToColumn);
router.get('/:todoId', todoGetById);
router.patch('/', todoUpdateById);
router.patch('/changePosition', todoChangePosition);
router.delete('/delete', todoDeleteById);

export default router;
