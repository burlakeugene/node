import Router from 'express';
import usersController from '../controllers/users.controller';

const router = Router();

router.get('/users', usersController.get);
router.post('/users', usersController.create);

export default router;
