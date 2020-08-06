import { Router } from 'express';

import ensureAthenticatication from '@modules/users/infra/http/middlewares/ensureAthenticatication';

import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAthenticatication);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
