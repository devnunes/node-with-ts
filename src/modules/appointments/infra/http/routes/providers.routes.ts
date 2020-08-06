import { Router } from 'express';

import ensureAthenticatication from '@modules/users/infra/http/middlewares/ensureAthenticatication';

import ProvidersController from '../controllers/ProvidersController';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAthenticatication);

providersRouter.get('/', providersController.index);

export default providersRouter;
