import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import { celebrate, Segments, Joi } from 'celebrate';
import ensureAthentication from '../middlewares/ensureAthenticatication';

import UserAvatarController from '../controllers/UserAvatarController';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const upload = multer(uploadConfig);
const userAvatarController = new UserAvatarController();
const usersController = new UsersController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAthentication,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
